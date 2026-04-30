"use client";
import {useRouter} from "next/navigation";

export default function TemplatesCard({templateId}){
    const router = useRouter();
    return(
        <button onClick={()=> router.push(`${templateId}`)}>
            Use Now
        </button>
    )
}