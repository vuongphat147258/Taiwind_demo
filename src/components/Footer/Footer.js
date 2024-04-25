import React from 'react';

const Footer = () => {
    return (
    <div id="footer" className="clear-both border-t border-solid border-[#a3a2a3] p-[25px] flex">
        <div className="fLeft float-left w-[340px]">
            <p>TÊN CÔNG TY</p>
            <p>
            Địa chỉ: 123 abc, phường X, quận Y, tp.Z<br />
            Điện thoại: 012.3456789
            </p>
            <p>
            Email:
            <a href="mailto:support@hocwebchuan.com">support@hocwebchuan.com</a>
            </p>
            {/* <!-- / class fLeft --> */}
        </div>

        <div className="fRight float-right w-[530px] mt-10">
            <ul className="text-right mb-[10px]">
            <li className="inline border-r border-solid border-gray-700 px-[5px]">
                <a href="#">Link 01</a>
            </li>
            <li className="inline border-r border-solid border-gray-700 px-[5px]">
                <a href="#">Link 02</a>
            </li>
            <li className="inline border-r border-solid border-gray-700 px-[5px]">
                <a href="#">Link 03</a>
            </li>
            <li className="inline border-r border-solid border-gray-700 px-[5px]">
                <a href="#">Link 04</a>
            </li>
            </ul>
            <p className="text-right">Copyright (c) 2012 Tên công ty</p>
            {/* <!-- / class fRight --> */}
        </div>
        {/* <!-- / id footer --> */}
    </div>
    )
}

export default Footer