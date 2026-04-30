"use client";

import axios from "axios";
import {toast} from "react-hot-toast";

const PaymentButton = () =>{
    const LoadScript = () =>{
        return new Promise((resolve) =>{
            const Script = document.createElement("script");
            Script.src = "https://checkout.razorpay.com/v1/checkout.js";
            Script.onload = () => resolve(true);
            Script.onerror = () => resolve(false);
            document.body.appendChild(Script);
        })
    }
    const HandlePayment = async() =>{
        const res = await LoadScript();
        if(!res){
            toast.error("Razorpay Failed To Load");
        }
        const {data}  = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/create-order`);
        const option = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.order.amount,
            currency: data.order.currency,
            name:"ProFolioX",
            description:"Premium Plan",
            order_id:data.order.id,

            handler:async function(response){
                const verify = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/verify-payment`,response);
                if(verify.data.success){
                    toast.success("Payment Success")
                }else{
                    toast.error("Payment Failed");
                }
            },
            theme:{
                color:"#6366f1"
            }
        };
        const PaymentObject = new window.Razorpay(option);
        PaymentObject.open();
    };
    return(
        <button onClick={HandlePayment} className="bg-indigo-600 text-white px-4 py-2 rounded">
            Upgrade To Premium
        </button>
    )
}
export default PaymentButton