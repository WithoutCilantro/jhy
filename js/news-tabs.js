// 学号后四位：1116；姓名缩写：JHY
// 初始化传入的选项卡组，使该函数可复用于页面上的多个 tablist。
function initializeTabs(tabList) {
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));

    tabs.forEach((tab) => {
        // 点击选项卡后，先清除本组选项卡的选中状态并隐藏所有内容面板。
        tab.addEventListener("click", () => {
            tabs.forEach((item) => {
                item.setAttribute("aria-selected", "false");
                item.tabIndex = -1;

                const panel = document.getElementById(item.getAttribute("aria-controls"));
                panel.hidden = true;
            });

            // 再设置当前选项卡为选中状态，并显示其关联的内容面板。
            tab.setAttribute("aria-selected", "true");
            tab.tabIndex = 0;
            document.getElementById(tab.getAttribute("aria-controls")).hidden = false;
        });
    });
}

// 为页面中每个 tablist 分别绑定点击事件。
document.querySelectorAll('[role="tablist"]').forEach(initializeTabs);
