import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import './gallery.css'



function Gallery (){

    const imageData = [

        {
    
          id:1,
          image:require('../../Assets/homeImages/vicar.jpg'),
          message: 'Our Leader'
        }, 
    
        {
          id:2,
          image: require('../../Assets/homeImages/Team.jpg'),
          message:'Our Able Team'
        },
    
        {
    
          id:3,
          image:require('../../Assets/homeImages/view.jpg'),
          message:`ACK St.Monica's church Mugumo-ini`
    
        },
    
        {
          id:4,
          image:require('../../Assets/homeImages/view 2.jpg'),
          message:`ACK St.Monica's church Mugumo-ini at night`
        },
    
        {
    
          id:5,
          image:require('../../Assets/homeImages/Congregation1.jpg'),
          message:'Our congregation and worshippers'
    
        },
    
        {
    
          id:6,
          image:require('../../Assets/homeImages/worship.jpg'),
          message:'Worship Team'
    
        },
    
        {
    
          id:7,
          image:require('../../Assets/homeImages/drumist.jpg'),
          message:'Fully Equipped musical instruments'
    
        },
    
        {
    
          id:8,
          image:require('../../Assets/homeImages/men2.jpg'),
          message:'The men of St.Monica'
    
        },
    
        {
    
          id:9,
          image:require('../../Assets/homeImages/women.jpg'),
          message:'The women of St.Monica'
    
        },
    
        {
    
          id:10,
          image:require('../../Assets/homeImages/sunday school.jpg'),
          message:`St.Monica's Sunday School`
    
        },
    
        {
    
          id:11,
          image:require('../../Assets/homeImages/kids fellowship.jpg'),
          message:`St.Monica's Kids`
    
        },
    
        {
    
          id:12,
          image:require('../../Assets/homeImages/awards.jpg'),
          message:'What do you know, we also win awards'
    
        },
    
    
    
    
      ]


    return(

        <>

            <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>

                    <Masonry gutter='1rem'>
                        {
                            imageData.map((item,index)=>(
                                <img 

                                    className='masonry__img'
                                    src={item.image} 
                                    key={index} 
                                    alt="" 
                                    style={{width:'100%', display:'block', borderRadius:'10px'}}

                                    />
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
                    
        
        
        </>



    )
}


export default Gallery