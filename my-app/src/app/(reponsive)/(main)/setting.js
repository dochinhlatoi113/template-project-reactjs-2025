'use client';
import { Button } from "flowbite-react";
import { useState } from "react";
import CartIcon from "@/app/(components)/(main)/cartIcon";
import HeaderNavItem from "@/app/(components)/(main)/headerNavItem";
import ItemLoginAndNotify from "@/app/(components)/(main)/ItemLoginAndNotify";
export default function Setting() {
   
    return (
        <div className="mt-10">
            <div className="fixed bottom-0 bg-white left-0 w-full bg-silver fnc-mobile overflow-x-auto">
                <div className="flex whitespace-nowrap space-x-4 px-4 py-2 min-w-max">
                    <CartIcon></CartIcon>
                    <HeaderNavItem></HeaderNavItem>
                    <ItemLoginAndNotify colorVar="white"></ItemLoginAndNotify>
                </div>
            </div>
        </div>
    );
}
