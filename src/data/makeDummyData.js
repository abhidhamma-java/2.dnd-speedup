export default function makeDummyData(roomTypeCount) {
  const getRandomPrice = () => Math.floor(Math.random() * 15) + 2

  let idCount = 0
  const makePriceData = () => {
    const priceData = []
    for (let i = 0; i < 30; i++) {
      priceData.push({ id: idCount, price: getRandomPrice() })
      idCount += 1
    }
    return priceData
  }

  // const roomType = {
  //   roomTypeName: '디럭스더블',
  //   roomNumbers: ['101호', '102호'],
  //   monthPriceList: [makePriceData(), makePriceData()],
  // }

  const dummyData = []
  for (let i = 0; i < roomTypeCount; i++) {
    dummyData.push({
      roomTypeName: '디럭스더블',
      roomNumbers: ['101호', '102호'],
      monthPriceList: [makePriceData(), makePriceData()],
    })
  }
  return dummyData
}
