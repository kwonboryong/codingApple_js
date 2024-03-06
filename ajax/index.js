var products = [
    { id : 0, price : 80000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Spring Shirt' },
    { id : 2, price : 60000, title : 'Black pants' }
];

// 데이터만큼 상품 목록 만들기 (js로 html 생성하기)
// 1. 카드 레이아웃 3개 생성
// 2. 카드에 데이터 넣기
products.forEach((a, i) => {
    var a = 
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${products[i].title}</h5> 
            <p>가격 : ${products[i].price}</p>
         </div>`;

        //     <h5>${a.title}</h5> 
        //     <p>가격 : ${a.price}</p>

    document.querySelector('.row').insertAdjacentHTML('beforeend', a);
});

// 상품 더보기 버튼
/* 이 코드는 페이지별로 데이터를 가져와서 화면에 추가하고, 
더 이상 가져올 데이터가 없을 경우 더보기 버튼을 비활성화합니다. 
페이지 번호를 저장하기 위한 page 변수를 사용하여 다음에 가져올 페이지를 지정하고, 
데이터를 가져올 때마다 이 값을 증가시킵니다.
*/
let page = 1; // 가져올 페이지를 나타내는 변수

document.getElementById('more').addEventListener('click', function() {
    fetch(`https://codingapple1.github.io/js/more${page}.json`)
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) { // 가져올 데이터가 있는 경우
            console.log(data);
            
            data.forEach(item => {
                let html = `
                <div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${item.title}</h5> 
                    <p>가격 : ${item.price}</p>
                </div>`;
                
                document.querySelector('.row').insertAdjacentHTML('beforeend', html);
            });

            page++; // 다음 페이지로 설정
        } else { // 가져올 데이터가 없는 경우
            console.log("더 이상 데이터가 없습니다.");
            document.getElementById('more').disabled = true; // 더보기 버튼 비활성화
        }
    })
    .catch(error => {
        console.log(error);
    });
});
