var initialState= [{
    id:1,
    name:'Iphone 7 Plus',
    image:'https://vienthongtuanlinh.net/images/detailed/1/iphone_7_plus_vienthongtuanlinh-min.jpg',
    description:'Sản phẩm có thiết kế đẹp, phù hợp với các bạn nữ',
    price:500,
    inventory:18,
    rating:4
},
{
    id:2,
    name:'Iphone 8 Plus',
    image:'https://msmobile.com.vn/images/products/2017/09/30/resized/iphone-8-thay-man-hinh_1506768426.jpg',
    description:'Sản phẩm có thiết kế thời thượng, phù hợp với mọi lứa tuổi',
    price:800,
    inventory:15,
    rating:3
},
{
    id:3,
    name:'Iphone X',
    image:'https://halomobile.vn/wp-content/uploads/2017/12/iphonexdesign.jpg',
    description:'Sản phẩm có thiết kế đi trước thời đại, với màn hình tai thỏ, cụm 3 camera',
    price:1000,
    inventory:20,
    rating:5
},

];//data ? data : [];
var product =(state=initialState,action)=>{
    switch (action.type) {
        default:
            return state;
    }   
};
export default product;