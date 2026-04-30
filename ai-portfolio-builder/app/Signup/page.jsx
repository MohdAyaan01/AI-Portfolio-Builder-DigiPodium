'use client';
import { useFormik } from 'formik';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Mail, Lock, User } from 'lucide-react';
import Navbar from '../Components/Navbar';
import axios from "axios";
import { toast } from "react-hot-toast"
import { GoogleLogin } from '@react-oauth/google';

const Signup = () => {
    const router = useRouter();
    const SignUpForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/signup`, values, {
                    withCredentials: true
                });
                toast.success("Account Created Successfully!");
                setTimeout(() => {
                    router.push('/Login');
                }, 2000);
            } catch (error) {
                toast.error(error.response?.data?.message || "SignUp Failed")
            }
        }
    })
    return (
        <main className="min-h-screen bg-[#050505] relative font-sans selection:bg-indigo-500/30">
            <Navbar />
            <div className="relative flex items-center justify-center p-6 pb-20 overflow-hidden min-h-[calc(100vh-100px)]">
                {/* Background Blurs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="w-full max-w-md relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white/[0.02] border border-white/[0.05] p-10 rounded-[3rem] shadow-2xl backdrop-blur-xl relative overflow-hidden"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-semibold tracking-tighter text-white">
                                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Pro Folio X</span>
                            </h2>
                            <p className="text-zinc-500 mt-4 text-sm leading-relaxed">
                                Start building your professional identity with artificial intelligence.
                            </p>
                        </div>

                        <form onSubmit={SignUpForm.handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                        <User className="h-4 w-4" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={SignUpForm.handleChange}
                                        onBlur={SignUpForm.handleBlur}
                                        value={SignUpForm.values.name}
                                        className="block w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                {SignUpForm.errors.name && SignUpForm.touched.name && (
                                    <p className="text-xs text-red-400/80 mt-2 ml-1">{SignUpForm.errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={SignUpForm.handleChange}
                                        onBlur={SignUpForm.handleBlur}
                                        value={SignUpForm.values.email}
                                        className="block w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                {SignUpForm.errors.email && SignUpForm.touched.email && (
                                    <p className="text-xs text-red-400/80 mt-2 ml-1">{SignUpForm.errors.email}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2 ml-1">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                            <Lock className="h-4 w-4" />
                                        </div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={SignUpForm.handleChange}
                                            onBlur={SignUpForm.handleBlur}
                                            value={SignUpForm.values.password}
                                            className="block w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {SignUpForm.errors.password && SignUpForm.touched.password && (
                                        <p className="text-xs text-red-400/80 mt-2 ml-1">{SignUpForm.errors.password}</p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 py-4 px-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-2xl font-semibold shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all"
                            >
                                Create Account
                            </button>

                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/[0.08]"></div>
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                                    <span className="px-3 bg-transparent text-zinc-600">Or continue with</span>
                                </div>
                            </div>

                            <div className="flex justify-center mt-4">
                                <GoogleLogin
                                    onSuccess={async (credentialResponse) => {
                                        try {
                                            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/google-login`, {
                                                token: credentialResponse.credential
                                            });
                                            localStorage.setItem("user", JSON.stringify(data.user));
                                            localStorage.setItem("token", data.token);
                                            toast.success("Successfully Signed Up with Google!");
                                            setTimeout(() => {
                                                router.push('/Dashboard');
                                            }, 1000);
                                        } catch (err) {
                                            toast.error("Google Authentication Failed");
                                        }
                                    }}
                                    onError={() => toast.error('SignUp Failed')}
                                    theme="filled_black"
                                    shape="circle"
                                />
                            </div>
                        </form>

                        <p className="mt-8 text-center text-sm text-zinc-500">
                            Already have an account?{' '}
                            <Link href="/Login" className="text-white hover:text-indigo-400 font-semibold transition-colors ml-1">
                                Sign in here
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Signup;