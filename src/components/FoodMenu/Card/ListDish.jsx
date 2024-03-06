import CardItem from './CardItem'
import './card.css'
const ListDish = () => {
  const infoCard = [
    {
      price: 10,
      imgUrl: 'src/assets/images/menu2_img_1.jpg',
      title: "T1"
    },
    {
      price: 20,
      imgUrl: 'src/assets/images/menu2_img_2.jpg',
      title: "T1"
    },
    {
      price: 30,
      imgUrl: 'src/assets/images/menu2_img_3.jpg',
      title: "T1"
    },
    {
      price: 40,
      imgUrl: 'src/assets/images/menu2_img_4.jpg',
      title: "T1"
    },
    {
      price: 10,
      imgUrl: 'src/assets/images/menu2_img_1.jpg',
      title: "T1"
    },
    {
      price: 20,
      imgUrl: 'src/assets/images/menu2_img_2.jpg',
      title: "T1"
    },
    {
      price: 30,
      imgUrl: 'src/assets/images/menu2_img_3.jpg',
      title: "T1"
    },
    {
      price: 40,
      imgUrl: 'src/assets/images/menu2_img_4.jpg',
      title: "T1"
    }
  ]

  const renderDish = infoCard.map((item, index) => {
    return <CardItem key={index}  {...item} />
  })
  return (
    <div className='row grid'>
      {renderDish}
    </div>
  )
}

export default ListDish