// "use client";
//
// import { useEffect } from "react";
// import { DropdownMenu } from "@/components/dropdownMenu/DropdownMenu";
// import { useUnit } from "effector-react";
// import { Cart } from "@/components/cart/Cart";
// import {
//     $showSmallMenu,
//     $stateOfMenu,
//     $videoHeight,
//     categoryCleared,
//     dropdownMenuClosed,
//     menuChanged,
//     smallMenuClosed,
//     smallMenuOpened,
// } from "@/stores/layout/menu/init";
// import { menuMounted } from "@/stores/layout/menu/content/init";
// import { SmallMenu } from "../smallMenu/SmallMenu";
// import { mounted } from "@/stores/favotites/favorites";
// import { usePathname, useRouter } from "next/navigation";
// import Hamburger from "@/components/Hamburger/Hamburger";
// import CategoryHumb from "@/components/Hamburger/category/CategoryHumb";
//
// type Props = { links: any };
//
// const Menu = ({ links }: Props) => {
//     const showSmallMenu = useUnit($showSmallMenu);
//     const showCart = useUnit($showCart);
//     const videoHeight = useUnit($videoHeight);
//
//     const menuState = useUnit($stateOfMenu);
//
//     let scroll = 0;
//
//     useEffect(() => {
//         const h = videoHeight;
//
//         mouseLeavedFromCart();
//         categoryCleared();
//         menuMounted();
//         // pageMounted();
//         mounted();
//
//         const defaultOffset = 200;
//
//         const scrollPosition = (): number =>
//             window.scrollY || document.documentElement.scrollTop;
//
//         const scrollListener = () => {
//             if (scroll >= h && showSmallMenu && menuState === "transparent") {
//                 menuChanged("color");
//             } else {
//                 menuChanged("transparent");
//             }
//
//             if (
//                 scrollPosition() > scroll &&
//                 showSmallMenu &&
//                 scroll >= defaultOffset &&
//                 !showCart
//             ) {
//                 dropdownMenuClosed();
//                 smallMenuClosed();
//             } else {
//                 smallMenuOpened();
//             }
//             scroll = scrollPosition();
//         };
//
//         window.addEventListener("scroll", scrollListener);
//
//         return () => window.removeEventListener("scroll", scrollListener);
//     }, [videoHeight]);
//
//     useEffect(() => {
//         const h = videoHeight;
//
//         mouseLeavedFromCart();
//         categoryCleared();
//         menuMounted();
//         // pageMounted();
//         mounted();
//
//         const defaultOffset = 200;
//
//         const scrollPosition = (): number =>
//             window.scrollY || document.documentElement.scrollTop;
//
//         const scrollListener = () => {
//             if (scroll >= h && showSmallMenu && menuState === "transparent") {
//                 menuChanged("color");
//             } else {
//                 menuChanged("transparent");
//             }
//
//             if (
//                 scrollPosition() > scroll &&
//                 showSmallMenu &&
//                 scroll >= defaultOffset &&
//                 !showCart
//             ) {
//                 dropdownMenuClosed();
//                 smallMenuClosed();
//             } else {
//                 smallMenuOpened();
//             }
//             scroll = scrollPosition();
//         };
//
//         window.addEventListener("scroll", scrollListener);
//
//         return () => window.removeEventListener("scroll", scrollListener);
//     }, []);
//
//     return (
//         <>
//             <div
//                 onMouseLeave={() => {
//                     dropdownMenuClosed();
//                 }}
//             >
//                 <SmallMenu links={links} />
//                 <Cart />
//                 <DropdownMenu />
//                 <Hamburger links={links} />
//                 <CategoryHumb />
//             </div>
//         </>
//     );
// };
//
// export default Menu;
import React from 'react';
import SmallMenu from "@/components/smallMenu/SmallMenu";

const Menu = () => {
    return (
        <>
            <SmallMenu/>
        </>
    );
};

export default Menu;