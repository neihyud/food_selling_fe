import Detail from "./ItemDetail/Detail"
import Comment from "./ItemComment/Comment"
import StickyBar from "./StickyBar/StickyBar"
import './ProductDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './animate.css'
import './jquery.exzoom.css'
import './nice-select.css'
import './style.css'
import './slick.css'
import './spacing.css'
import './venobox.min.css'

const ProductDetail =()=>{
    return (
        <section class="fp__blog_details mt_120 xs_mt_90 mb_100 xs_mb_70">
            <div class="container">
                <div class="row">
                    {/* chi tiết/bình luận */}
                    <div class="col-xl-8 col-lg-8">
                        <Detail/>
                        <Comment/>
                    </div>
                  <StickyBar/>
                </div>
            </div>
            </section>
    )    
}

export default ProductDetail


