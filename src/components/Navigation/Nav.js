import React from 'react';

const Nav = () => {
    return (
        <>
        <div className="p-[10px]">
            <div className="float-left">
                <h1 className=" bg-slate-400 w-20 h-20 mb-5">LOGO</h1>
                <p>www.hocwebchuan.com</p>
                {/* <!-- / class hLeft --> */}
            </div>
            <div className="float-right">
                {/* <!-- Thêm flex để hai thẻ li nằm theo chiều ngang, ko dùng nó nằm theo chiều dọc --> */}
                <ul className="text-right mb-[37px] flex justify-evenly">
                    <li className="inline size-1 flex">
                        {/* <a href="#"><img src="images/img_logo.gif" alt="" /></a> */}
                        <button className=" bg-black text-white rounded-lg h-8 mr-2"> button01 </button>
                        <button className=" bg-black text-white rounded-lg h-8"> button02 </button>
                    </li>
                    <li className="last inline">
                        <a href="#"><img src="images/btn_name02.gif" alt="" /></a>
                    </li>
                </ul>
                <ul className="text-right">
                    <li className="inline border-r border-solid border-gray-700 px-[5px]">
                        <a href="#">link 01</a>
                    </li>
                    <li className="inline border-r border-solid border-gray-700 px-[5px]">
                        <a href="#">link 02</a>
                    </li>
                    <li className="inline border-r border-solid border-gray-700 px-[5px]">
                        <a href="#">link 03</a>
                    </li>
                    <li className="inline pl-[5px]">
                        <a href="#">link 04</a>
                    </li>
                </ul>
                {/* <!-- / class hRight --> */}
            </div>
            {/* <!-- / id header --> */}
        </div>
        <div id="gNav" className="clear-both">
            {/* <!-- Không thêm height: 22px cho thẻ ul --> */}
            <ul
                className="bg-repeat-x border border-solid border-black py-3 bg-slate-500"
                style={{backgroundImage: "url('./images/bg_gnav.gif')"}}
            >
                <li className="border-r border-solid border-white inline px-10">
                    <a className="text-white font-bold hover:text-yellow-500" href="#">TRANG CHỦ</a>
                </li>
                <li className="border-r border-solid border-white inline px-10">
                    <a className="text-white font-bold hover:text-yellow-500" href="#">GIỚI THIỆU</a>
                </li>
                <li className="border-r border-solid border-white inline px-10">
                    <a className="text-white font-bold hover:text-yellow-500" href="#">SẢN PHẨM</a>
                </li>
                <li className="border-r border-solid border-white inline px-10">
                    <a className="text-white font-bold hover:text-yellow-500" href="#">DỊCH VỤ</a>
                </li>
                <li className="inline pl-10">
                    <a className="text-white font-bold hover:text-yellow-500" href="#">LIÊN HỆ</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Nav;
