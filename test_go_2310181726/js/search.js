const searchTestData = [
    {
        word: '牙膏', link: 'https://www.google.com/'
    },
    {
        word: '黑人牙膏', link: 'https://www.google.com/'
    },
    {
        word: '白人牙膏', link: 'https://www.google.com/'
    },
    {
        word: '牙膏組合', link: 'https://www.google.com/'
    },
    {
        word: '兒童用牙膏', link: 'https://www.google.com/'
    },
]

searchExample = (platform, el) => {
    const {value} = el;
    let arr = [];
    if (!!value && value === '牙膏') {
        arr = searchTestData;
    }
    setSearchList(platform, value, arr);
}

setSearchList = (platform, keyword, arr) => {
    document.querySelector(`.searchCorrect-${platform}`).innerHTML = '';
    if (arr.length === 0) {
        document.querySelector(`.searchCorrect-${platform}`).innerHTML =
            `<div class="searchCorrect-item">
                <div class="itembox">
                <p class="searchCorrect-text color-none">無符合的推薦項目</p>
                </div>
            </div>`;
        return false;
    }

    arr.forEach(({word, link}) => {
        const highLight = word.replace(keyword, `<span class="color-primary">${keyword}</span>`);
        const itemHtml = `
            <div class="searchCorrect-item">
                <a class="itembox" href="${link}" title="${word}">
                    <div class="searchCorrect-icon icon-log"></div>
                    <p class="searchCorrect-text">${highLight}</p>
                </a>
            </div>`;
        document.querySelector(`.searchCorrect-${platform}`).innerHTML += itemHtml;
    })
}

// header搜尋區塊開關
function headerSearch_web_open() {
    $('.wrapper').addClass('wrapper--search');
    $('.headArea-search').slideDown();
}
function headerSearch_web_close() {
    $('.wrapper').removeClass('wrapper--search');
    $('.headArea-search').hide();
}
// header搜尋區塊開關_mid
function headerSearch_m_open() {
    $('.container').hide();
    $('.container-finding').show();
    containerFullSize();
    if ( $('.headBg').length ) {
      $('.headBg').hide();
    }
    return false;
}

function headerSearch_m_close() {
    $('.container-menu').show();
    $('.container-finding').hide();
    containerSize();
    if ( $('.headBg').length ) {
      $('.headBg').show();
    }
    return false;
}

$('.headArea .header-search-box').on('click', function () {
    headerSearch_web_open();
    return false;
});
$('.headerPc-scroll .searchInput').on('click', function () {
  if( $(window).width() >= 992 ) {
    headerSearch_web_open();
  } else {
    headerSearch_m_open();
  }
  return false;
});


$('.container-cover').on('click', function () {
    headerSearch_web_close();
});

$(window).on('resize', function () {
    // 搜尋區塊關閉
    headerSearch_m_close();
    headerSearch_web_close();
});