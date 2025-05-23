'use client';
// hook
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
// component
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
  const IsMobile = useCheckSize();
  const paddingTop = IsMobile ? 'pt-[120px]' : 'pt-[130px]';
  const gridClass = IsMobile ? '' : 'grid grid-cols-2';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className={` container mx-auto max-w-[1300px] ${paddingTop} responsize-product-detail-padding `}>
      <div className={`${gridClass} pt-[10%]`}>
        <Card className="w-full max-w-md mx-auto ">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-center">Đăng nhập</h2>
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

            <Button type="submit">Đăng nhập</Button>
          </form>
        </Card>
        <div>
           <img src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png"></img>
        </div>
      </div>
    </div>
  );
}
