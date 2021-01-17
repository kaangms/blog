import HomePageOne from "../pages/homePages/HomePageOne";
import { Route, Switch } from "react-router-dom";
import FooterArea from "../../components/footerArea/FooterArea";
import { AboutUsPageOne } from "../pages/aboutPages/AboutUsPageOne";
import SubFooter from "../../components/subFooter/SubFooter";
import NotFound from "../../components/common/NotFound";
import ConsultancyPageOne from "../pages/ConsultancyPages/ConsultancyPageOne";
import HeaderTop from "../../components/header/HeaderTop";
import { HeaderBottom } from "../../components/header/HeaderBottom";
import ContactPageOne from "../pages/contactPages/ContactPageOne";
import { BlogPageOne } from "../pages/blogPages/BlogPageOne";
import PostDetails from "../../components/blog/PostDetails";

function App() {
  return (
    <div>
    
        <HeaderTop />
        <HeaderBottom />
        <div className="container">
        <Switch>
          <Route path="/" exact component={HomePageOne} />
          <Route path="/anasayfa" exact component={HomePageOne} />
          <Route path="/hakkımızda" exact component={AboutUsPageOne} />
          <Route path="/ne-nedir" exact component={ConsultancyPageOne} />
          <Route path="/blog" exact component={BlogPageOne} />
          <Route path="/blog-detay" exact component={PostDetails} />
          <Route path="/iletisim" exact component={ContactPageOne} />
          <Route exact component={NotFound} />
        </Switch>
        </div>
       
        <FooterArea />
        <SubFooter />
    </div>
  );
}

export default App;
