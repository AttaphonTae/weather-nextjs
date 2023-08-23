function convertENGTH(text: string){
    if(text === 'Light rain shower') return 'ฝนตกเบาบาง'
    if(text === 'Moderate or heavy rain shower') return 'ฝนตกปานกลางหรือหนักมาก'
    if(text === 'Patchy rain possible') return 'อาจมีฝนตกเป็นหย่อมๆ'
    if(text === "Heavy rain") return 'ฝนตกหนัก'
    if(text === 'Moderate rain') return 'ฝนตกปานกลาง'
    if(text === 'Partly cloudy') return 'มีเมฆบางส่วน'
    if(text === 'Sunny') return 'เเดดจ้า'
    if(text === 'Cloudy') return 'เมฆมาก'
    if(text === 'Clear') return 'ท้องฟ้าโล่ง'
    if(text === 'Overcast') return 'มืดครึ้ม'
    if(text === 'Mist') return 'หมอกปกคลุม'
    return text
}
export default convertENGTH