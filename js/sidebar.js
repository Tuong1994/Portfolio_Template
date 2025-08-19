const SIDEBAR_ITEM_ACTIVE_CLASS = "sidebar-item-active";
const CONTENT_ITEM_ACTIVE_CLASS = "content-item-active";

export const sideBar = () => {
  const menuItems = document.querySelectorAll(".sidebar-item");
  const contentItems = document.querySelectorAll(".content-item");

  menuItems.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      e.preventDefault();
      const menuId = menu.getAttribute("href");
      const contentId = menuId.substring(1);
      const content = document.getElementById(contentId);

      menuItems.forEach((menu) =>
        menu.classList.remove(SIDEBAR_ITEM_ACTIVE_CLASS)
      );
      contentItems.forEach((content) =>
        content.classList.remove(CONTENT_ITEM_ACTIVE_CLASS)
      );

      menu.classList.add(SIDEBAR_ITEM_ACTIVE_CLASS);
      content.classList.add(CONTENT_ITEM_ACTIVE_CLASS);
    });
  });
};
