"use client"
import Link from "next/link"
import { Button } from "../button"
import { CartIcon } from "../cartIcon"

const navbarItem = [
  { label: "Início", path: "/" },
  { label: "Contato", path: "/contact" },
  { label: "Cardápio", path: "/menu", orderNow: true },
]

export const ActionNavbar = () => {
    return (
      <div className="flex hidden md:flex items-center justify-end gap-3 flex-1">
        {navbarItem.map((item) => (
          <Button
            key={`Nav - ${item.label}`}
            variant={item.orderNow ? "contrast" : "ghost"}
          >
            <Link href={item.path} className="font-medium">
              {item.label}
            </Link>
          </Button>
        ))}
        <CartIcon />
      </div>
    );
}