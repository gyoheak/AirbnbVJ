const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
    logo.style.width = '100px'; // 로고 크기 조정 등의 추가 작업 가능
    nav.style.marginTop = '30px'; // 네비게이션 메뉴 위치 조정 등의 추가 작업 가능
  } else {
    header.classList.remove('scrolled');
    logo.style.width = '120px'; // 로고 크기 조정 등의 추가 작업 가능
    nav.style.marginTop = '50px'; // 네비게이션 메뉴 위치 조정 등의 추가 작업 가능
  }
});
