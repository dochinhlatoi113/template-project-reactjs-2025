'use client';
import { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import Link from "next/link";

export default function Register() {
    const IsMobile = useCheckSize();
    const paddingTop = IsMobile ? 'pt-[100px]' : 'pt-[120px]';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 ${paddingTop}`}>
            <Card className="w-full max-w-md shadow-2xl rounded-3xl p-8 bg-white">
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-bold text-center text-purple-700">Đăng ký thành viên</h2>

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

                    <div>
                        <Label htmlFor="phone" value="Số điện thoại" />
                        <TextInput
                            id="phone"
                            type="tel"
                            placeholder="091xxxxxxx"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all rounded-full"
                    >
                        Đăng ký
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                        Đã có tài khoản?{' '}
                        <Link href="/login" className="text-purple-600 font-medium hover:underline">
                            Đăng nhập ngay
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}
