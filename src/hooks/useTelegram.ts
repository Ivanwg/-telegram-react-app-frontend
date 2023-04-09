const tg = window.Telegram.WebApp;


export function useTelegram() {

  const onToggleBtn = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else tg.MainButton.show();
  }

  const onClose = () => {
    tg.close();
  }

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
    onToggleBtn,
  }
}