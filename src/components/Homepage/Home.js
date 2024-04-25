import React from 'react';

const Home = () => {
    return (
        <>
        <div id="pageBody" className="py-5 px-[10px]">
          <div id="content" className="float-left w-[620px]">
            <h2 className="border-b border-solid border-gray-600 text-lg mb-[10px]">
              Sản phẩm mới
            </h2>
            {/* <!-- Thuộc tính zoom, clearfix ko được hỗ trợ trong tailwindcss --> */}
            <div className="newProduct clear-both mb-5 grid grid-cols-2 gap 4 flex">
            <div className="text-center bg-black  text-white justify-center p-4">Hình</div>
            <img src="" alt="" />
              <div className="float-right w-[350px] p-4">
                <h3 className="text-[#5870e6] mb-[10px]">Tên sản phẩm</h3>
                <p> 
                  Text giới thiệu sản phẩm text giới thiệu sản phẩm text giới
                  thiệu sản phẩm text giới thiệu sản phẩm text giới thiệu sản phẩm
                  text giới thiệu sản phẩm.
                </p>
              </div>
              {/* <!-- / class newProduct --> */}
            </div>
            {/* <!-- Thêm flex để li nằm ngang --> */}
            <ul className="thumbList clear-both bg-gray-100 border border-solid border-gray-200 p-[10px] mb-10 flex">
              <li className="inline pr-2">
                <a href="#"><img src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-anh-thien-nhien-3d-tuyet-dep-003.jpgg_products01.jpg" alt="" /></a>
              </li>
              <div className="bg-black text-white item-center mr-10">hình 1</div>
              <div className="bg-black text-white item-center mr-10">hình 2</div>
              <div className="bg-black text-white item-center mr-10">hình 3</div>
              <div className="bg-black text-white item-center mr-10">hình 4</div>
              <div className="bg-black text-white item-center mr-10">hình 5</div>
              <div className="bg-black text-white item-center">hình 6</div>
            </ul>

            <h2 className="border-b border-solid border-gray-600 text-lg mb-[10px]">
              Tin tức
            </h2>
            <dl className="news pt-[10px] pb-10 pl-[10px]">
              <dt>07/05/2012</dt>
              <dd className="border-b border-dotted border-black mb-[10px] pb-[5px]">
                <a href="#" className="hover:underline">Tin mới tin mới tin mới tin mới tin mới tin mới tin mới.</a>
              </dd>

              <dt>07/05/2012</dt>
              <dd className="border-b border-dotted border-black mb-[10px] pb-[5px]">
                <a href="#" className="hover:underline">Tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới.</a>
              </dd>

              <dt>07/05/2012</dt>
              <dd className="last">
                <a href="#" className="hover:underline">Tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới tin mới.</a>
              </dd>
            </dl>

            <p className="banner text-center">
              <a href="#"><img src="images/bnr_name01.gif" alt="" /></a>
            </p>
            {/* <!-- / id content --> */}
          </div>

          <div id="sidebar" className="float-right w-[240px]">
            <h2 className="border-b border-solid border-gray-600 text-lg mb-[10px]">
              Link liên quan
            </h2>
            <ul className="linkList pb-[30px] pl-[10px]">
              <li style={{backgroundImage: "url('images/ico_arrow.gif')"}} className="bg-no-repeat bg-left pl-[15px] mb-[3px]">
                <a href="#">Link liên quan 01</a>
              </li>
              <li style={{backgroundImage: "url('images/ico_arrow.gif')"}} className="bg-no-repeat bg-left pl-[15px] mb-[3px]">
                <a href="#">Link liên quan 02</a>
              </li>
              <li style={{backgroundImage: "url('images/ico_arrow.gif')"}} className="bg-no-repeat bg-left pl-[15px] mb-[3px]">
                <a href="#">Link liên quan 03</a>
              </li>
              <li style={{backgroundImage: "url('images/ico_arrow.gif')"}} className="bg-no-repeat bg-left pl-[15px] mb-[3px]">
                <a href="#">Link liên quan 04</a>
              </li>
              <li style={{backgroundImage: "url('images/ico_arrow.gif')"}} className="bg-no-repeat bg-left pl-[15px] mb-[3px]">
                <a href="#">Link liên quan 05</a>
              </li>
              <li style={{backgroundImage: "url('images/ico_arrow.gif')"}} className="bg-no-repeat bg-left pl-[15px] mb-[3px]">
                <a href="#">Link liên quan 06</a>
              </li>
            </ul>

            <h2>Link liên quan</h2>
            <ul className="bannerList pt-[10px]">
                <div className="mb-[10px] bg-black h-8 rounded-lg text-center text-white">Banner1</div>
                <div className="mb-[5px] bg-black h-8 rounded-lg text-center text-white">Banner2</div>
                <div className="mb-[5px] bg-black h-8 rounded-lg text-center text-white">Banner3</div>
            </ul>
            {/* <!-- / id sidebar --> */}
          </div>
          {/* <!-- / id pageBody --> */}
        </div>
        </>
        )
 }
export default Home;