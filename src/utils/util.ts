const formatTime = (time: number, fmt: string = 'yyyy-MM-dd hh:mm:ss') => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const o: any = {
        'M+': month,
        'd+': day,
        'h+': hours,
        'm+': minutes,
        's+': seconds,
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (year + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
}
export {
    formatTime,
}