'use client';
import { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import useCheckSize from "@/app/(heper)/reponsive-check-size";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const IsMobile = useCheckSize();
    const paddingTop = IsMobile ? 'pt-[100px]' : 'pt-[120px]';

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 ${paddingTop}`}>
            <div className="w-full max-w-md">
                <Card className="p-8 rounded-3xl shadow-2xl">
                    <form className="flex flex-col gap-5">
                        <h2 className="text-2xl font-semibold text-center text-gray-800">Đăng nhập</h2>

                        <div>
                            <Label htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" value="Mật khẩu" />
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Ghi nhớ đăng nhập</Label>
                        </div>

                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-semibold hover:opacity-90 transition-all"
                        >
                            Đăng nhập
                        </Button>

                        <div className="text-center text-sm text-gray-500">
                            Chưa có tài khoản?{" "}
                            <Link href="/register" className="text-indigo-600 font-medium hover:underline">
                                Đăng ký ngay
                            </Link>
                        </div>
                    </form>

                    {/* --- Social Login Section --- */}
                    {/* --- Social Login Section --- */}
                    <div className="mt-6">
                        <div className="text-center text-gray-500 mb-4">Hoặc đăng nhập bằng</div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Facebook */}
                            <button className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1455c7] text-white py-2 px-4 rounded-full transition-all flex-1">
                                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.012 3.676 9.163 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.324 21.163 22 17.012 22 12z" />
                                </svg>
                                Facebook
                            </button>

                            {/* Google */}
                            <button className="flex items-center justify-center gap-2 bg-white border hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-full transition-all flex-1">
                                <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                                    <path fill="#4285F4" d="M533.5 278.4c0-18.5-1.5-37-4.7-55H272v104h147.5c-6.4 34-25.3 62.8-53.8 82.1v68.2h86.9c50.8-46.8 80-115.7 80-199.3z" />
                                    <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.6l-86.9-68.2c-24.2 16.3-55 25.8-91.3 25.8-70.3 0-129.9-47.5-151.3-111.3H31v69.8C75.7 480.3 167.7 544.3 272 544.3z" />
                                    <path fill="#FBBC04" d="M120.7 325c-10.2-30-10.2-62.7 0-92.7V162.5H31c-35 69.8-35 152.2 0 222l89.7-69.5z" />
                                    <path fill="#EA4335" d="M272 107.3c39.4 0 75 13.5 103 39.7l77.1-77.1C405.6 24.1 344.6 0 272 0 167.7 0 75.7 64 31 162.5l89.7 69.8c21.4-63.8 81-111.3 151.3-111.3z" />
                                </svg>
                                Google
                            </button>

                            {/* Zalo */}
                            <button className="flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0055cc] text-white py-2 px-4 rounded-full transition-all flex-1">
                                <ArrowRightCircleIcon fill="white" className="w-5 h-5" />
                                Zalo
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
