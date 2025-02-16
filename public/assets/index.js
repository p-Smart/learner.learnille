
function exportImage(imgPath){
    return new URL(imgPath,import.meta.url).href
}

const ASSETS = {
    logo: exportImage('./icons/learnile.svg'),
    auth1:  exportImage('./images/auth1.png'),
    vector: exportImage('./images/Vector.svg'),
    heart: exportImage('./images/Heart.svg'),
    icon: exportImage('./images/Icon.svg'),
    info: exportImage('./images/Info.svg'),
    link: exportImage('./images/Link.svg'),
    logout: exportImage('./images/log-out-01.svg'),
    bell: exportImage('./images/mi_notification.svg'),
    noteblank: exportImage('./images/NoteBlank.svg'),
    printer: exportImage('./images/Printer.svg'),
    squareFour: exportImage('./images/SquaresFour.svg'),
    stack: exportImage('./images/Stack.svg'),
    blueStack: exportImage('./icons/Stack.svg'),
    tdesign: exportImage('./images/tdesign_time.svg'),
    calender: exportImage('./images/uil_calender.svg'),
    users: exportImage('./images/Users.svg'),
    chats: exportImage('./images/Chats.svg'),
    squareOffset: exportImage('./images/CheckSquareOffset.svg'),
    creditCard: exportImage('./images/CreditCard.svg'),
    crown: exportImage('./images/Crown.svg'),
    graduation: exportImage('./images/GraduationCap.svg'),
    barchart: exportImage('./images/bar-chart.svg'),
    viewMore: exportImage('./icons/Vector.svg'),
    clock:exportImage('./images/Clock.svg'),
    userBar: exportImage('./images/card-bar.svg'),
    singleUser: exportImage('./images/user-card.svg'),
    star: exportImage('./images/Star.svg'),
    bluebook: exportImage('./icons/bluebook.svg'),
    bluetrophy: exportImage('./icons/bluetrophy.svg'),
    Dollar: exportImage('./icons/CurrencyDollarSimple.svg'),
    envelop: exportImage('./icons/Envelope.svg'),
    facebook: exportImage('./icons/facebook.svg'),
    greyclock: exportImage('./icons/greyclock.svg'),
    Notebook: exportImage('./icons/Notebook.svg'),
    Notepad: exportImage('./icons/Notepad.svg'),
    NotePadBlue: exportImage('./icons/Notepadblue.svg'),
    redclock: exportImage('./icons/redclock.svg'),
    twitterx: exportImage('./icons/twitterx.svg'),
    whatsapp: exportImage('./icons/whatsapp.svg'),
    greyusers: exportImage('./icons/greyusers.svg'),
    blueclock: exportImage('./icons/BlueClock.svg'),
    copy: exportImage('./icons/Copy.svg'),
    visa: exportImage('./icons/visa.svg'),
    mastercard: exportImage('./icons/masterCard.svg'),
    redcard: exportImage('./icons/RCreditCard.svg'),
    circlecheck: exportImage('./icons/CheckCircle.svg'),
    paypal: exportImage('./icons/paypal.svg'),
    bluepaycard: exportImage('./icons/BCreditCard.svg'),
    bluecheck: exportImage('./icons/BlueCheck.svg')
}

export default ASSETS