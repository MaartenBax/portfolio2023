import SquareImage from './SquareImage'

export default function CurrentSet({setData, currentImg, onSelectImg}) {


  return (
    <div className='gallery-top-left'>

      <SquareImage imgLink={currentImg.src} />


    </div>
  )
}
