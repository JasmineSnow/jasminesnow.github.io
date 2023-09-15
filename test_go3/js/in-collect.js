const snackbar = new Snackbar();

window.onload = () => {
    document.querySelectorAll('.cb-all').forEach(el =>{
        el.addEventListener('change', event => {
            selectAll(event.target.checked);
            setTotal();
            setInfoEditFoot();
        })
    })

    document.querySelectorAll('.infoEditItem-chk').forEach(el => {
        el.addEventListener('change', event => {
            const [type, category, id] = event.target.getAttribute('data-id').split('-');
            const classList = document.querySelector(`#div-${category}-${id}`).classList;
            if (event.target.checked) {
                classList.add('ckd');
            } else {
                classList.remove('ckd');
            }
            setTotal();
            setInfoEditFoot();
            if (getSelectedTotal() === 0) {
                document.querySelectorAll('.cb-all').forEach(el => el.checked = false);
            }
        })
    })
};

/**
 * 取得已選取數量
 * @returns {number}
 */
const getSelectedTotal = () => {
    return document.querySelectorAll('.infoEditItem-chk:checked').length;
}

/**
 * 顯示已選取數量
 * @param selectedTotal
 */
const setSelectedTotal = (selectedTotal = 0) => {
    document.querySelector('#s-selected-total').innerHTML = `${selectedTotal}`;
}

const setTotal = () => {
    const selectedTotal = getSelectedTotal();
    setSelectedTotal(selectedTotal);
}

/**
 * (勾選/取消勾選)所有項目
 * @param checked
 */
const selectAll = (checked) => {
    document.querySelectorAll('.infoEditItem-chk').forEach(el => {
        el.checked = checked;
        const [type, category, id] = el.getAttribute('data-id').split('-');
        const classList = document.querySelector(`#div-${category}-${id}`).classList;
        if (el.checked) {
            classList.add('ckd');
        } else {
            classList.remove('ckd');
        }
    })
}

/**
 * 點擊移除收藏
 */
const onClickRemoveSelectedFavor = () => {
    const list = Array.from(document.querySelectorAll('.infoEditItem-chk'))
        .filter(({checked}) => checked)
        .map(el => el.getAttribute('data-id'));
    if (Array.isArray(list) && list.length > 0) {
        removeFavor(list);
        infoEdit_close();
    }
}

/**
 * 刪除收藏
 * @param array
 */
const removeFavor = (array) => {
    array.forEach(item => {
        const [type, category, id] = item.split('-');
        document.querySelector(`#div-${category}-${id}`).remove();
    })
    snackbar.show(`<p class="snackbar-text">已移除&nbsp;<span class="highlight">${array.length}</span>&nbsp;項商品的收藏</p>`);
}

/**
 * 重置編輯
 */
const clearEdit = () => {
    document.querySelectorAll('.cb-all').forEach(el => el.checked = false);
    selectAll(false);
    setTotal();
    setInfoEditFoot();
}

/**
 * 設定編輯底部區塊
 */
const setInfoEditFoot = () => {
    const selectedTotal = getSelectedTotal();
    document.querySelector('.infoEditFoot').style.display = (selectedTotal === 0) ? 'none' : '';
}

/*------------------------------------*/
// 編輯收藏 開啟關閉
function infoEdit_open() {
    $('.infoEdit-face').hide();
    $('.infoEdit-hidden').fadeIn(200);
    $('.infoEditItem').addClass('open');
}
function infoEdit_close() {
    $('.infoEdit-face').fadeIn(200);
    $('.infoEdit-hidden').hide();
    $('.infoEditItem').removeClass('open');
    clearEdit();
}
