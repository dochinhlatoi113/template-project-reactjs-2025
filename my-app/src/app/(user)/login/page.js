'use client';
import { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import useCheckSize from "@/app/(heper)/reponsive-check-size";

export default function Login() {
    const IsMobile = useCheckSize();
    const paddingTop = IsMobile ? 'pt-[100px]' : 'pt-[120px]';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div className={`container mx-auto max-w-[1200px] px-4 ${paddingTop}`}>

            <div className="">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 tracking-wide drop-shadow-lg mb-10 pt-2">
                    Xin chào bạn
                </h1>

                <Card className="w-full max-w-md mx-auto shadow-xl rounded-2xl p-6">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all"
                        >
                            Đăng nhập
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
