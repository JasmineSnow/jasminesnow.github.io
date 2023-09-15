const pointRageOptions = {
    0:{min:0, max:100},
    1:{min:101, max:500},
    2:{min:501, max:1000},
    3:{min:1001, max:-1},
}

window.onload = () => {
    document.querySelectorAll(".filterNum-check").forEach(label => {
        label.querySelector('input[type="checkbox"]').addEventListener('change', event => {
            const {id, checked} = event.target;
            setFilterButton(id, checked);
            setFilterProduct(id, checked);
            setFilterClearButton();
            setButton();
        });
    });
    setButton();
};

const onClickClearFilter = () => {
    document.querySelectorAll('.filterNum-check').forEach(label => {
        label.querySelector('input[type="checkbox"]').checked = false;
        const {id, checked} = label.querySelector('input[type="checkbox"]');
        setFilterButton(id, checked);
    })
    setButton();
    setFilterProduct();
    setFilterClearButton();

}

const setButton = () => {
    let doneDisabled = true;
    let total = 0;
    document.querySelectorAll('.filterNum-check').forEach(label => {
        const checked = label.querySelector('input[type="checkbox"]').checked;
        const num = label.querySelector('.num').textContent;
        if (checked) {
            doneDisabled = false;
            total++;
        }
    })
    const showNum = (total === 0) ? '' : (total > 99) ? '(99+)' : `(${total})`;
    document.querySelector('#bt-done').disabled = doneDisabled;
    document.querySelector('#bt-clear').textContent = `清除全部${showNum}`
    document.querySelectorAll('.num.span-filter-num').forEach( el => {
        el.textContent = showNum;
    })
}

const onClickFilterButton = i => {
    const id = `bt-point-${i}`;
    const [type, category, index] = id.split('-');
    const checked = false;
    document.querySelector(`#cb-point-${index}`).checked = checked;
    setFilterButton(id, checked);
    setFilterClearButton();
}

onClickDone = () => {

}

const setFilterProduct = () => {
    let filtered = false;
    for (let i = 0; i <= 3 ; i++) {
        if (document.querySelector(`#cb-point-${i}`).checked) {
            filtered = true;
        }
    }
    document.querySelectorAll('.product-item-block').forEach(el => {
        const point = Number(el.getAttribute('data-point'));
        let display = 'none';
        for (let i = 0; i <= 3 ; i++) {
            if (document.querySelector(`#cb-point-${i}`).checked) {
                filtered = true;
                const {min, max} = pointRageOptions[i];
                if ((i === 3 && point >= min) || (point >= min && point <= max)) {
                    display = '';
                    break;
                }
            }
        }

        //沒有任何點數篩選條件時不篩選
        if (!filtered) display = '';
        el.style.display = display;
    })
    reloadGrid();
}

const setFilterButton = (id, checked) => {
    const [type, category, index] = id.split('-');
    if (!(!!category && category === 'point')) return;
    const display = (checked) ? '' : 'none';
    document.querySelector(`#bt-point-${index}`).style.display = display;
}

const setFilterClearButton = () => {
    let checkedTotal = 0;
    for (let i = 0; i <= 3 ; i++) {
        if (document.querySelector(`#cb-point-${i}`).checked) {
            checkedTotal++;
        }
    }
    const clearDisplay = (checkedTotal >= 2) ? '' :  'none';
    document.querySelector(`#bt-point-clear`).style.display = clearDisplay;
    document.querySelector('.filter-box.md-none').style.display = (checkedTotal === 0) ? 'none' : '';
}

const reloadGrid = () => {
    setTimeout(function () {
            $('.JS_grid').masonry();
        }, 0
    );
}