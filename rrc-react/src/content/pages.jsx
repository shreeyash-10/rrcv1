import { useEffect, useState } from 'react';
import { apiUrl, resolveMediaUrl } from '../lib/apiClient';

export function HomeContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/#">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/रामायण रिसर्च काउंसिल_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        {/* <li><a href="press.html">प्रेस रिलीज</a></li> */}
                        {/* <li><a href="press.html">वेब मीडिया कवरेज</a></li> */}
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/#">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          {/* <li><a href="press.html">प्रेस रिलीज</a></li> */}
                          {/* <li><a href="press.html">वेब मीडिया कवरेज</a></li> */}
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container banner_container">
          <div className="banner_marquee" aria-label="Ramayan Research Council highlights">
            <ul className="banner_slider banner_marquee__track">
              <li><img alt="RRC highlight 1" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-1.jpg" /></li>
              <li><img alt="RRC highlight 2" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-2.jpg" /></li>
              <li><img alt="RRC highlight 3" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-3.jpg" /></li>
              <li><img alt="RRC highlight 4" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-4.jpg" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-1.jpg" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-2.jpg" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-3.jpg" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/रामायण रिसर्च काउंसिल_files/Slider-4.jpg" /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/रामायण रिसर्च काउंसिल_files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ने के लिए</a>
                </li>
                <li>
                  <img alt="image" src="/assets/रामायण रिसर्च काउंसिल_files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ने के लिए</a>
                </li>
                <li>
                  <img alt="image" src="/assets/रामायण रिसर्च काउंसिल_files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ने के लिए</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/रामायण रिसर्च काउंसिल_files/om_icon.png" /> संकल्प</div>
                <div className="heading">संकल्प सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://www.ramayanresearchcouncil.com/#">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container slick-initialized slick-slider slick-dotted"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6700, transform: 'translate3d(-1340px, 0px, 0px)'}}><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/रामायण रिसर्च काउंसिल_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control10" aria-hidden="false" className="guidance_section_slider slick-slide slick-current slick-active" data-slick-index={0} id="slick-slide10" role="tabpanel" style={{width: 1340}} tabIndex={0}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/रामायण रिसर्च काउंसिल_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/रामायण रिसर्च काउंसिल_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control11" aria-hidden="true" className="guidance_section_slider slick-slide" data-slick-index={1} id="slick-slide11" role="tabpanel" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/रामायण रिसर्च काउंसिल_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={2} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/रामायण रिसर्च काउंसिल_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/रामायण रिसर्च काउंसिल_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={3} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/रामायण रिसर्च काउंसिल_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul></div></div>
            {/* <ul class="guidance_section_slider">
                  <li class="two-col-left">
                      <div class="sub_title"><img src="https://www.ramayanresearchcouncil.com/images/om_icon.png" alt="om" /> Guidance</div>
                      <div class="heading">Our Mentors</div>
                      <div class="tag_line"><span></span>Saints are our far-sighted visionaries. The person or organization that works on the orders and instructions of saints never faces any kind of problem.</div>
                      <p>The Ramayana Research Council has been working to fulfil its objectives with the consultation and advice of renowned saints. There are many such saints but it's not possible to mention the names of all of them but mentioning few names here.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi voluptates soluta eligendi perferendis ducimus minus repellat voluptatum, laboriosam sed dolore fugit veniam exercitationem at mollitia? Dolore debitis perspiciatis libero.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est esse dolorem architecto, ipsa praesentium eos corporis, aperiam, exercitationem distinctio quia. Deleniti dicta placeat minima molestias dolorum, excepturi voluptate exercitationem!   
                      </p>
                  </li>
                  <li class="two-col-right">
                      <ul class="mentor_item single-mentor">
                          <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/safeimagekit-For Backdrop.jpg" alt="pic" /> */}
            {/* <p>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज</p>
                              <span>महंत, उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उप्र</span> */}
            {/* </li> */}
            {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor4.png" alt="pic" />
                              <p>महामण्डलेश्वर गीता मनीषी पूज्य स्वामी श्री ज्ञानानंद जी महाराज</p>
                              <span>करनाल, हरियाणा</span>
                          </li> */}
            {/* </ul> */}
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button><ul className="slick-dots" role="tablist" style={{}}><li className="slick-active" role="presentation"><button aria-controls="slick-slide10" aria-label="1 of 2" aria-selected="true" id="slick-slide-control10" role="tab" tabIndex={0} type="button">1</button></li><li className="" role="presentation"><button aria-controls="slick-slide11" aria-label="2 of 2" id="slick-slide-control11" role="tab" tabIndex={-1} type="button">2</button></li></ul></div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{display: 'inline-block'}} type="button">Previous</button>
              <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12900, transform: 'translate3d(-2580px, 0px, 0px)'}}><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-2} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={0} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={1} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-current slick-active" data-slick-index={2} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-active" data-slick-index={3} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={4} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={5} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={6} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={7} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={8} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={9} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={10} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={11} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={12} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={13} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={14} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={15} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={16} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={17} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/रामायण रिसर्च काउंसिल_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div></div></div>
              <button aria-label="Next" className="slick-next slick-arrow" style={{display: 'inline-block'}} type="button">Next</button></div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/रामायण रिसर्च काउंसिल_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function AboutUsContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanparivar.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/about us_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* 
       <div class="banner-wrapper">
      <div class="banner-container">
        <div class="banner-title">
    <img src="https://www.ramayanresearchcouncil.com/divimages/desk_banner.png" alt="Desktop Banner" class="banner-img desktop-only" />
    
    <img src="https://www.ramayanresearchcouncil.com/divimages/banner-mobile.png" alt="Mobile Banner" class="banner-img mobile-only" />
    
    <h1>ABOUT US</h1>
        </div>
      </div>
    </div> */}
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">हमारे बारे में</h1>
          </div>
        </div>
      </div>
      <div className="container">
        {/* First section with image and description */}
        <div className="section-wrapper">
          <div className="image-container">
            <img alt="Sita with twin children" className="main-image" src="/assets/about us_files/parvati.png" />
          </div>
          <div className="content-container">
            <div className="content-header">
              <div className="icon">🕉️</div>
              <h3>रामायण रिसर्च काउंसिल</h3>
            </div>
            <p className="description" style={{lineHeight: '1.8'}}>
              ‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है।
              काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
              काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
              <br />
              भगवान श्रीराम और माता सीताजी ऐसे विषय हैं जिन पर अध्ययन से किसी परिवार, समाज, राज्य, देश और विश्व में शांति, सद्भाव और सफल सुनीति का विकास संभव हो सकता है। यही वो विषय हैं जिनको हम अपने घर और समाज में जितना प्रसारित करेंगे, हमारे बच्चे उतने संस्कारवान होंगे। हमारा घर और समाज में उतनी ही शांति और उन्नति होगी। 
              प्रभु श्रीरामचंद्रजी ने जहां स्वयं मर्यादा पुरुषोत्तम के रूप में हर पुरुष को समाज में जीने हेतु मर्यादा सिखाई, वहीं माता सीताजी भारतीय संस्कृति के लिए एक आदर्श नारी की प्रतीक हैं जिनसे विश्व की मातृशक्तियां प्रेरित हो सकती हैं।
              <br />
              जीवन में कितना भी धन कमा लें, सनातन संस्कार में परिवारजनों के द्वारा श्रीराम-नाम का नाम और ध्यान करते ही हमारा जन्म होता है और हमारी अंतिम यात्रा भी श्रीराम-नाम सत्य के साथ ही संपन्न होती है। इसलिए हमारे पूर्वज और घर के बड़े श्रीराम-नाम को महामंत्र और जीवन की पूंजी मानते हैं। केवल श्रीराम का नाम ही साथ जाता है, शेष सब यहीं धरा रह जाता है।
              काउंसिल का चिंतन है कि यही वे विषय हैं जिनका अधिक से अधिक प्रसार कर हम ‘वसुधैव कुटुम्बकम’ जैसी अवधारणा और संरचना को एक नया पंख दे सकते हैं। 
              काउंसिल के परमाध्यक्ष पवनसुत श्रीहनुमान जी महाराज हैं।
              <br />
              <br />
              कोरोनाकाल के दौरान ‘डिजिटल रामलीला मंचन’-
              <br />
              <br />
              काउंसिल ने कोरोना काल में सबसे पहले डिजिटल रामलीला की शुरूआत की। उत्तराखण्ड में नैनीताल उधमसिंहनगर से सांसद श्रीमान अजय भट्ट जी के कावेरी अपार्टमेंट (नई दिल्ली में एमपी फ्लैट्स) में हमने बड़ी स्क्रीन लगाकर नवरात्र के नौ दिनों तक डिजिटल रूप से रामलीला मंचन को प्रसारित किया। एक प्रकार से यहीं से रामायण रिसर्च काउंसिल की शुरूआत हुई।
            </p>
            <div className="content-header">
              <div className="icon">🕉️</div>
              <h3 />
            </div>
            <p className="description">
              इससे पहले, श्री कुमार सुशांत एक बड़ी टीम के साथ वर्ष 2018 से अयोध्या में प्रभु श्रीरामलला के मंदिर संघर्ष के ऊपर एक ग्रंथ- ‘श्रीरामला- मन से मंदिर तक’, को जनमानस में लाने हेतु कार्य कर रहे थे। कोरोनाकाल में श्री सुशांत ने कई सामाजिक एवं सांस्कृतिक विषयों पर कार्य किया। उन्होंने घर बैठकर बच्चे अध्ययन कर सकें, इसके लिए भारत सरकार की कई योजनाओं पर डॉक्यूमेंट्री बनाईं और उनका प्रसार किया, ताकि कोरोनाकाल में घर बैठे लोग केंद्र सरकार की योजनाओं से अवगत होकर लाभ उठा सकें। वर्ष 2020 में एक बड़े उद्देश्य के साथ रामायण रिसर्च काउंसिल को ट्रस्ट के रूप में पंजीकृत किया गया।
            </p>
          </div>
        </div>
        {/* Second section with objectives and image */}
        <div className="section-wrapper reverse-layout">
          <div className="image-container">
            <img alt="Lord Rama profile" className="main-image" src="/assets/about us_files/shiva.png" />
          </div>
          <div className="content-container objectives">
            <div className="content-header">
              <div className="icon">🕉️</div>
              <h3>ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’-</h3>
            </div>
            <p className="objective-intro">
              अयोध्या में प्रभु श्रीरामलला के मंदिर संघर्ष पर आधारित 1250 पृष्ठों का एक ग्रंथ है- ‘श्रीरामलला- मन से मंदिर तक’। इस ग्रंथ में अयोध्या की पौराणिक, ऐतिहासिक, सांस्कृतिक, राजनीतिक, सामाजिक, धार्मिक विषयों को शामिल करने के साथ 250 से अधिक महानुभावों के सकारात्मक विचारों को सम्मिलित किया गया है।
            </p>
            <div className="objective-item">
              <h4>हिन्दी भाषा में यह ग्रंथ तैयार हो चुका है। 10 अन्य अंतरराष्ट्रीय भाषाओं में इसके अनुवाद पर कार्य चल रहा है। 21 देशों में इसका विमोचन करना है तथा संयुक्त राष्ट्र के सभी देशों में इसका डिजिटल रूप से प्रसार करना है।</h4>
              <div className="circle-indicator" />
              <div className="objective-content">
                <p>
                  कोरोनाकाल के बाद श्री सुशांत अपनी टीम के साथ ग्रंथ- ‘श्रीरामला- मन से मंदिर तक’ पर कार्य करते रहे। 31 अगस्त 2021 को माननीय प्रधानमंत्री श्री नरेंद्र मोदी जी ने श्री कुमार सुशांत को मिलने का समय दिया। रामायण रिसर्च काउंसिल के बोर्ड ऑफ ट्रस्टी के श्री अजय भट्ट जी ने मा. प्रधानमंत्री जी के समक्ष अपने विषय को सुंदर स्वरूप में प्रस्तुत किया। श्री सुशांत ने ग्रंथ के पूरे विषय से मा. प्रधानमंत्री जी को अवगत कराया। मा. प्रधानमंत्री ने पूरे विषय को समझते हुए अपना अमूल्य मार्गदर्शन भी प्रदान किया। ग्रंथ लेखन के क्रम में श्री सुशांत को देश के जाने-माने लोकप्रिय संतों का असीम स्नेह भी प्राप्त हुआ। 
                  आज हर्ष का विषय है कि अयोध्या में श्रीराम मंदिर संघर्ष के ऊपर 1250 पृष्ठों का ग्रंथ भी पूर्ण हुआ। आज इस ग्रंथ का हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में इसका अनुवाद भी हो रहा है। ग्रंथ का 21 से अधिक देशों में विमोचन किया जाना है तथा संयुक्त राष्ट्र के कई देशों में डिजिटल रूप से प्रसार होना प्रस्तावित है। ग्रंथ में अयोध्या की सांस्कृतिक, आध्यात्मिक एवं ऐतिहासिक महत्ता से लेकर मंदिर-संघर्ष के कानूनी, राजनीतिक, सामाजिक... कई सारे पहलुओं को शामिल किया गया है। ग्रंथ में मां सीताजी एवं प्रभु श्रीराम के मानव-कल्याण संदेशों को विस्तार से शामिल किया गया है। इस ग्रंथ में संकलन एवं शोध-कार्यों के अलावा विभिन्न क्षेत्रों के 250 से अधिक विद्वानों के आलेखों को भी शामिल किया गया है। काउंसिल ने ग्रंथ प्रकाशन समिति गठित कर इसका वैश्विक स्तर पर प्रसार करने का संकल्प लिया है।
                </p>
              </div>
            </div>
            <div className="objective-item">
              <h4>छोटे बच्चों में संस्कार के संवर्धन हेतु ‘रामायण मंच’-</h4>
              <div className="circle-indicator" />
              <div className="objective-content hidden">
                <p>
                  आज हमारे सामने बहुत बड़ी चुनौती है। चुनौती है, इस डिजिटल और आधुनिक युग में अपने घर के बच्चों को आपत्तिजनक विषयों से बचाने की। एक कटु सत्य है कि बच्चों को स्कूलों में शिक्षा तो मिल रही है, लेकिन उनमें संस्कार और अनुशासन का लोप होता जा रहा है। उनमें धैर्य की कमी होती जा रही है। 
                </p><p>  1. ऐसे में छोटे बच्चों को अनुशासन, संस्कार, धैर्य के साथ कुशल विचार, सांस्कृतिक भावना एवं नैतिक ज्ञान के प्रसार हेतु उन्हें काउंसिल के तत्त्वावधान में तैयार ‘मानस-ज्ञान’ से अवगत कराते हैं।</p>
                <p> 2.डिजिटल रूप से अनुशासन और संस्कारपूर्ण विषयों को हमारे प्रशिक्षक संतों के माध्यम से सिखाने का प्रयत्न करते हैं। इस दौरान श्रीरामचरितमानस की उनकी पसंदीदा चौपाई को उन्हें याद करवाते हैं। बच्चों द्वारा वाचन करते हुए वीडियोज़ को रिकॉर्ड कर उसे ‘रामायण मंच’ नाम के यू-ट्यूब चैनल के माध्यम से प्रसार करते हैं। ऐसे बच्चों के वीडियो प्रसारित होने से दूसरे बच्चे एवं अभिभावकों में प्रतिस्पर्धी भावना का प्रसार होता है। इससे कई घरों में श्रीरामचरितमानस का घरों में न केवल रखना, बल्कि अध्ययन शुरू होना भी देखा गया है। इसके लिए एक शॉर्ट-टर्म सर्टिफिकेट कोर्स भी प्रारंभ किया जा रहा है। </p>
                {/* <p> 3. Not only have the holy Shri Ramcharitmanas and Shri Ramayana been kept in many homes, but their study has also started. </p> */}
                {/* <p>For more information, you can get specific information by visiting the related website www.ramayanmanch.com.</p>  */}
                {/* </p> */}
              </div>
            </div>
            <div className="objective-item">
              <h4>काउंसिल ने श्रीभगवती सीता तीर्थ क्षेत्र को विकसित करने हेतु संकल्प लियाः</h4>
              <div className="circle-indicator" />
              <div className="objective-content hidden">
                <p>
                  हम माता सीताजी के जीवनदर्शन को श्रीभगवती के रूप में अधिकाधिक प्रसार करना चाहते हैं। इस निमित्त मां सीतीजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) में मां सीता का भव्य मंदिर निर्माण करना प्रस्तावित है। यह केवल एक मंदिर ही नहीं होगा, बल्कि विश्व की नारी समाज के लिए एक प्रेरणा का केंद्र बन सके, ऐसा संकल्प है। 
                  संकल्प है कि 51 शक्तिपीठों से मिट्टी, जल एवं ज्योत लाकर, उन शक्तिपीठों के उन्हीं छवि को यहां छोटे-स्वरूप में स्थापित किया जाना है, ताकि इनकी परिक्रमा से सभी शक्तिपीठों की परिक्रमा पूर्ण हो सके। 
                  सीतामढ़ी क्षेत्र को पर्यटन, सांस्कृतिक एवं शक्ति-क्षेत्र के रूप में विकसित किया जाना उद्देश्य है।
                  <br />
                  हाल में बिहार सरकार अंतर्गत बिहार राज्य धार्मिक न्यास पर्षद ने सीतामढ़ी में काउंसिल के प्रयास एवं निःस्वार्थ सेवा-भाव को देखते हुए सीतामढ़ी में 833 वर्ष पुराने अति प्राचीन मठ श्रीराम-जानकी स्थान (राघोपुर बखरी स्थित) को जीर्णोद्धार करने एवं मठ की लगभग 12 एकड़ भूमि आवंटिक की। इस भूमि पर मां सीताजी का भव्य मंदिर निर्माण करने का संकल्प है।
                  यहां श्रीहनुमानजी की 108 ऊंची प्रतिमा और श्रीगरुड़ स्वरूप में श्री जटायु भगवान की 21 फीट ऊंची प्रतिमा का भी संकल्प है।
                  <br />
                  सीतामढ़ी में काउंसिल के इस पवित्र कार्य हेतु अयोध्या में श्रीरामलला के मंदिर निर्माण के लगे आर्किटेक्ट श्री आशीष सोमपुरा को ही जिम्मेदारी प्रदान की गई है, ताकि जिन हाथों से अयोध्या में कार्य हो रहा है, उन्हीं के द्वारा यहां भी कार्य संपादित हो। 
                  काउंसिल ने सीतामढ़ी में मां सीताजी के इस कार्य को मातृ-शक्तियों के नेतृत्व में क्रियान्वित करवाने का संकल्प लिया है। इस हेतु ‘सीता सखी समिति’ गठित की गई है।
                  इस प्रकल्प से उद्देश्य है कि मां सीताजी का संबंध जिन स्थलों से भी है, उनको हम तीर्थ-क्षेत्र के रूप में विकसित कर सकें।
                  <br />
                  हम मां सीताजी का मंदिर ही नहीं, बल्कि मां सीताजी के जीवन-आदर्शों को विश्व-स्तर पर ले जाने के लिए एक पुस्तक ‘श्रीभगवती सीता- महाशक्ति साधना’ भी तैयार कर चुके हैं। इसे कई भाषाओं में तैयार कर अब विश्व-स्तर पर ले जाने की तैयारी की जा रही है।
                  <br />
                  उपरोक्त पूरे विषय में नलखेड़ा में बगलामुखी मंदिर प्रांगण से सिद्ध संत महामंडलेश्वर परमहंस पूज्य स्वामी सांदीपेंद्र जी महाराज का कुशल मार्गदर्शन रहा। श्री सुशांत महाराजश्री के प्रिय शिष्यों में से हैं। प्रारंभ में पूज्य स्वामी सांदीपेंद्र जी महाराज काउंसिल के मुख्य मार्गदर्शक थे, बाद में चलकर महाराजश्री ही रामायण रिसर्च काउंसिल के अध्यक्ष मनोनीत हुए।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>Newsletter</span></div>
          <div class="section_heading">To get weekly & monthly <br />news,Subscribe to our newsletter</div>
          <form class="newsletter_form">
              <input type="email" placeholder="Your email address" />
              <input type="submit" value="Subscribe" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/about us_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function OurAimContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/about us 2_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/our-aim.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">काउंसिल के उद्देश्य</h1>
          </div>
        </div>
      </div>
      <div className="body-container" style={{backgroundImage: 'linear-gradient(to bottom, #ffefe2, #fff)'}}>
        <div className="container">
          <div className="content_section">
            <div className="two-col-left">
              <img alt="template" src="/assets/about us 2_files/temple1.jpg" />
            </div>
            <div className="two-col-right">
              <ul>
                <li>समाज को सुसंस्कृत एवं संस्कारित बनाना ‘रामायण रिसर्च काउंसिल’ का मुख्य उद्देश्य है। काउंसिल विशेष रूप से छोटे बच्चों में अनुशासन, संस्कार और संस्कृति के मूल्यों को विकसित करने के लिए निरंतर कार्य कर रही है।</li>
                <li>हम आधुनिकता के साथ-साथ पाश्चात्य प्रभाव अपना रहे हैं, इसी कारण काउंसिल के अंतर्गत हम सदैव 'भारतीय संस्कृत' की बात करते हैं। हमारी संस्कृति और परंपरा को जीवित रखने हेतु हम भारतीय जीवन-मूल्यों का प्रचार-प्रसार कर रहे हैं।</li>
                <li>हम मानते हैं कि छोटे बच्चे किसी भी राष्ट्र की धरोहर होते हैं, जिन पर भविष्य निर्भर करता है, इसलिए ‘रामायण मंच’ के माध्यम से बच्चों में अनुशासन और संस्कृति का विकास किया जा रहा है। यह प्रकल्प बच्चों के मन में रामायण आधारित शिक्षा और नैतिकता को गहराई से रोपित करता है।</li>
                <li>हम अयोध्या (उत्तर प्रदेश) में स्थित श्रीरामलला मंदिर को इस देश की सांस्कृतिक धरोहर मानते हैं, इसलिए हम इस मंदिर के इतिहास पर आधारित पुस्तक (श्रीरामलला – मन से मंदिर तक) ला रहे हैं। इसका उद्देश्य यह है कि आने वाली पीढ़ी इस मंदिर की सांस्कृतिक महत्ता को समझे और उसकी रक्षा कर सके।</li>
                <li>22 जनवरी 2024 को श्रीरामलला की प्राण-प्रतिष्ठा के दिन, हम एक विशेष 'पत्र-ग्रंथ' तैयार करवा रहे हैं जिसका नाम है – ‘ए लेटर टू नरेंद्र मोदी’। काउंसिल पूरे सनातन परिवार की ओर से मा. प्रधानमंत्री श्री नरेंद्र मोदी जी के नाम 11,111 पत्र लिखवा रही है।</li>
                <li>हम मां सीता जी को एक प्रेरणादायी नारी-आदर्श मानते हैं, जो माताओं और बहनों के लिए प्रेरणा का स्रोत बन सकती हैं। हम मां सीता के प्राकट्य स्थल सीतामढ़ी (बिहार) को एक सांस्कृतिक केंद्र और तीर्थ-स्थल के रूप में विकसित करना चाहते हैं, जिससे नारी-सशक्तिकरण को बढ़ावा मिल सके।</li>
                <li>हम देवभाषा संस्कृत का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं, इसलिए 'रामायण वार्ता' नामक पत्रिका का संस्कृत में प्रकाशन और प्रसार किया जा रहा है। यह प्रयास संस्कृत को जन-जन की भाषा बनाने की दिशा में उठाया गया एक सशक्त कदम है।</li>
                <li>हमने 'सनातन संग भारत' नामक पुस्तक तैयार की है, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पटना (बिहार) के गांधी मैदान में 6 जुलाई 2025 को किया गया। इस आयोजन में पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज की गरिमामयी उपस्थिति रही।</li>
                <li>हमने वर्ष 2025 के महाकुंभ में हुई प्रमुख गतिविधियों को चित्र सहित संकलित कर ‘महाकुंभ का महामंथन’ नामक वृहद साहित्य को कॉफी टेबल बुक के रूप में प्रकाशित किया है। यह पुस्तक एक समृद्ध दस्तावेज के रूप में भविष्य के लिए संरक्षित की गई है।</li>
                <li>हमारा उद्देश्य अत्यंत स्पष्ट है – सनातन को सशक्त बनाना, नई पीढ़ी को संस्कारित करना और सांस्कृतिक धरोहरों का संरक्षण करना। काउंसिल की टीम दिन-रात साहित्यिक सृजन, चिंतन और संतों के मार्गदर्शन में कार्यरत है।</li>
                <li>काउंसिल से जुड़े संतों का कहना है – "अगर हृदय शुद्ध हो और उद्देश्य स्पष्ट हो, तो सफलता निश्चित है।" आज काउंसिल जिन-जिन उद्देश्यों को लेकर चली थी, वे सभी एक-एक करके साकार होते जा रहे हैं।</li>
              </ul>
              <a href="https://www.ramayanresearchcouncil.com/our-aim.html#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/about us 2_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function BookAboutUsContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanparivar.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://rammandirbook.com/about-us.html#" target="_blank" rel="noopener noreferrer">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">श्रीरामलला ग्रंथ</a></li>
                        <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                        <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                        <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                        <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://rammandirbook.com/index.html" target="_blank" rel="noopener noreferrer"><img alt="Ramaynmanch" src="/assets/book about us _files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://rammandirbook.com/about-us.html#" target="_blank" rel="noopener noreferrer">मीडिया</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                        <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://rammandirbook.com/about-us.html#" target="_blank" rel="noopener noreferrer">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">श्रीरामलला ग्रंथ</a></li>
                          <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                          <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                          <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                          <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">रामायण-मंच</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                          <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                          <li><a href="https://rammandirbook.com/convenor.html" target="_blank" rel="noopener noreferrer">संयोजक</a></li>
                          <li><a href="https://rammandirbook.com/general-secretary.html" target="_blank" rel="noopener noreferrer">महासचिव</a></li>
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">श्रीरामलला ग्रंथ</h1>
          </div>
        </div>
      </div>
      <div className="body-container" style={{backgroundImage: 'linear-gradient(to bottom, #ffefe2, #fff)'}}>
        <div className="container">
          {/* <div class="content_section">
              <div class="two-col-left">
                  <img src="https://www.ramayanresearchcouncil.com/images/PIC-2.png" alt="template" />
                  <img src="https://www.ramayanresearchcouncil.com/images/PIC.png" alt="second_picture" />
              </div> */}
          <div className="two-col-right">
            <ul className="ul-pad">
              <li>इस पुस्तक की आवश्यकता इसलिए भी महत्व रखती है, क्योंकि इंटरनेट की दुनिया आज प्राथमिक ज़रूरतों में शामिल हो चुकी है और जिस गूगल सर्च-इंजन पर हम इंटरनेट से कोई विषय खोजते हैं, वह हमारे देश का नहीं है। द्वितीय पहलू यह है कि पुस्तकें तो कई सारी हैं, लेकिन विभिन्न विषयों पर विभक्त हैं। ऐसे में, सदियों, शताब्दियों या सहस्राब्दियों बाद भी अगर कोई सनातन के ध्वज को थामने वाला पुरोधा इस विषय पर अनुसंधान करे... तो उसे सत्य की परिधि में संकलित और संदर्भित सारे तथ्य समेत कई तत्कालीन विद्वानों के शोध या आलेख एक जगह उपलब्ध हो जाएं और विश्व के लोगों को यह मालूम हो जाए कि कैसे लगभग 500 वर्षों के लंबे संघर्षकाल के बाद 20वीं शताब्दी में नरेंद्र दामोदरदास मोदी जैसे प्रभावशाली व्यक्तित्व को वर्ष 2014 में देश का नेतृत्व मिला। उन्होंने अपने पहले कार्यकाल में कई ऐतिहासिक कार्यों के साथ अयोध्या में प्रभु श्रीराम मंदिर निर्माण के लिए अदालत में श्रीरामलला का पक्ष साक्ष्यपरक रूप से मजबूती से रखा और आखिरकार सुप्रीम कोर्ट का श्रीरामलला के पक्ष में निर्णय आया, अपने दूसरे कार्यकाल के एक वर्ष बाद ही प्रभु के भव्य मंदिर निर्माण के लिए भूमि-पूजन का कार्य संपन्न किया और अब दूसरे ही कार्यकाल के अंतिम दौर में भगवान श्रीरामलला की प्राण-प्रतिष्ठा का पावन-कार्य संपन्न हुआ है। इस तरह एक गंभीर विषय पर पूर्ण-विराम भी लगा।</li>
              <li>पुस्तक के विषय-वस्तु पर थोड़ी और गहराई से प्रकाश डालें तो "अयोध्या का अध्यात्म से नाता" विषय से इस ग्रंथ की शुरूआत हुई है। पवित्र रामायण और रामचरितमानस के अलावा पुराणों और वेदों में अयोध्या जी और कौशल जी के वर्णन को संदर्भ सहित उल्लेख करने का प्रयत्न किया है, ताकि आने वाली पीढ़ियां अयोध्या की आध्यात्मिक गरिमा को गौरव के साथ समझ सकें। इक्ष्वाकु वंश तथा सूर्यवंश के बाद अयोध्या में सर्वधर्म सम्भाव, राजा विक्रमादित्य के द्वारा मंदिर-निर्माण, मुगलों के अत्याचार और फिर अंग्रेजों के दमन के दौरान की अयोध्या, हमारी आस्था के साथ खिलवाड़, विवाद की शुरूआत एवं श्रीरामलला के मंदिर निर्माण के लिए संघर्ष को चरणबद्ध तरीके से प्रस्तुत किया गया है। </li>
              <li>अदालत में गंभीरतापूर्ण सुनवाई व वर्ष 2019 में पांच जजों की पीठ द्वारा 40 दिनों तक लगातार इस मामले की सुनवाई को विशेष तरीके से दिनवार प्रस्तुत किया गया है, ताकि सहस्राब्दियों बाद भी मा. सुप्रीम कोर्ट के फैसले पर कोई झूठ की परत न चढ़ाई जा सके। फैसले के बाद विश्वभर में सनातनी उत्साह, मीडिया की सकारात्मक ख़बरें एवं मा. प्रधानमंत्री नरेंद्र मोदी जी के हाथों ऐतिहासिक भूमि-पूजन और फिर अयोध्या में प्रभु के भव्य मंदिर निर्माण हेतु निधि समर्पण अभियान के साथ इस संघर्ष के साक्षी रहे कई सज्जनों एवं संतों का भावपूर्ण आलेख, अयोध्या में सर्वधर्म सम्भाव, इस भाव को स्थापित करने वाले मंदिरों का विवरण, भगवान श्रीराम से संबंधित कई ऐसी भ्रांतियां जो समाज में विष की तरह घोल दी गई है, उन अधिकांश विषयों पर संतों के आलेख के अलावा दर्जनों ऐसे धार्मिक, सामाजिक तथा तथ्यपरक विचार आमंत्रित कर संकलित किए गए हैं जो सहस्राब्दियों बाद भी एक प्रमुख संदर्भ का कार्य कर सकते हैं। </li>
              <li>इसके अलावा इस पुस्तक-ग्रंथ में कई भारतीय भाषाओं में रामायण के वर्णन को सम्मिलित किया गया है। भगवती सीताजी के जीवनकाल (जिसका वर्णन बहुत अधिक नहीं मिलता) पर भी बहुत सारी ज्ञानवर्धक विषयक सामग्री यहां प्राप्त हो सकती है। वहीं, भगवान के विवाह-उत्सव के दौरान की झलक को शब्दों के माध्यम से आप अनुभूति कर सकते हैं, प्रभुश्रीरामजी के आदर्श जीवन-दर्शन की सुंदर झलक भी यहां से आप जान सकते हैं। साथ ही अयोध्या की लोककला, संस्कृति एवं वैभव की पौराणिक तथा ऐतिहासिक गाथा का उल्लेख करते हुए वर्तमान में कैसे उसी गौरव को वापस लौटाने की पहल की जा रही है, इस पर विस्तृत आलेख को प्रस्तुत किया जा रहा है। कोई कथावाचक या आध्यात्मिक वक्ता बनना चाहे तो यहां नौ खण्डों में विस्तृत-विषय को प्रस्तुत किया गया है। </li>
              <li>आज भी चिंतन में वर्ष 1528 का वो दौर सोचकर शरीर सिहर उठता है, जब एक लाख चौहत्तर हज़ार लोगों के बलिदान को हम याद करते हैं। इतने बलिदानों के बाद ही मीर बांकी जैसे आतातायी अपने मनसूबे में सफल हो पाए थे। समझिए, ये उस दौर के संघर्ष को, बलिदान को, जब संचार का माध्यम शून्य था। यहां सोचने की बात है कि उन लोगों ने श्रीरामलला के स्थान को ही अपना निशाना क्यों बनाया, क्योंकि भगवान श्रीराम भारतीय संस्कृति के उच्चतम प्रतिमान रहे। वो न केवल हिंसक और उन्मादी थे, वो इस हद तक आक्रांता थे, जो उस संस्कृति को चुनौती देने आए थे जो विश्व की सबसे प्राचीन संस्कृति है और वो ऐसा इसलिए कर सके, क्योंकि उस संस्कृति का आधार अहिंसा है। अयोध्या की बात हो या मथुरा या काशी की, यमुना देवी का मंदिर जामा मस्जिद बन गया हो, या तेजो महालेश्वर ताजमहल बन गया हो... उन आक्रांताओं को जहां अवसर मिला, तोड़-फोड़ कर हमारे देश को सांस्कृतिक रूप से नष्ट करने की पूरी कोशिश की गई। लेकिन सच है कि कुछ तो बात है कि हस्ती मिटती नहीं हमारी। न कभी मिटेगी, क्योंकि यह ऋषियों, तपस्वियों और महापुरुषों की भूमि है। परिणामस्वरूप, आर्कियोलॉजिकल एविडेंसेज या हिस्टोरिकल फेक्ट्स के आधार पर हमने सर्वोच्च न्यायालय में यह लड़ाई हमने जीती और आज इस ऐतिहासिक अद्भुत मंदिर का स्वरूप सबके सामने है। </li>
              <li>लेकिन हम अपनी आने वाली पीढ़ी को यही कहना चाहते हैं कि हमें कभी नहीं भूलना है कि अष्टचक्रा नवद्वारा देवानां पूरयोध्या, जैसे तथ्यों को। अयोध्या के शाब्दिक तात्पर्य को, जो है, जिसे जीता न जा सके। हमें कभी नहीं भूलना है कि अष्टचक्रा नवद्वारा के बड़े तात्विक अर्थ हैं- आठ चक्र और नौ द्वारों पर बसी हुई अयोध्या। हमें नहीं भूलना है कि हमारे शरीर में भी नौ द्वार हैं- दो नासिका, दो कान, एक मुख, दो आंखें, दो मल-मूत्र के और हमारे शरीर को भी अयोध्या कहा गया है। वो अयोध्या कैसी थी, उसका प्रमाण है हमारा शरीर। हमें कभी नहीं भूलना कि वो अलग तरीके का नगर था, जिसे इक्क्षाकु वंश के राजाओं ने बसाया था। हम आने वाली पीढ़ी के हाथों में बहुत बड़ी विरास्त सौंपने जा रहे हैं, जिसे उन्हें संभालना है और इस विरासत के साहित्यिक प्रमाण के लिए ‘श्रीरामलला- मन से मंदिर’ तक जैसे ग्रंथ सहस्राब्दियों तक एक संदर्भ ग्रंथ प्रमाणित होगा। </li>
              <li>सबसे प्रमुख कि यह पुस्तक-ग्रंथ "श्रीरामलला- मन से मंदिर तक" हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में प्रकाशित हो रहा है, भारत के आलावा 21 देशों में विमोचन होना है और संयुक्त राष्ट्र के सभी मान्य देशों में डिजिटल रूप से इसका प्रसार होगा। विदित है कि नेपाल, बांग्लादेश, इंडोनेशिया, श्रीलंका, मलेशिया, सिंगापुर, संयुक्त राज्य, म्यांमार, यूनाइटेड किंगडम, कनाडा, दक्षिण अफ्रीका, मॉरीशस, ऑस्ट्रेलिया और न्यूजीलैंड जैसे देशों में सनातन को मानने वाले हमारे अपने लोग अधिकाधिक हैं। वियतनाम जैसे कई देश हैं जहां अब सनातन धर्म को पढ़ा जाता है और उसे जानने की कोशिश भी की जाती है। ऐसे में भगवान श्रीरामलला के मंदिर निर्माण की खुशी भारत में ही नहीं, अपितु पूरे विश्व के सनातन परिवार में है। यह ऐसी खुशी है जो समस्त सनातन परिवार की संस्कृति एवं गौरव के जीवंत एवं जागृति के भाव से उत्पन्न हुई है। प्रभु श्रीराम मंदिर निर्माण के लिए संघर्ष और समाधान से जुड़े उपरोक्त कई तथ्यानुगत सत्य को जब हम अलग-अलग भाषाओं में विश्व के पटल पर रखेंगे, तो समस्त सनातन परिवार हर्षित हो उठेगा। सभी अपने देश में संबंधित भाषाओं में प्रभु श्रीराम के मानव-कल्याण संदेश और अयोध्या में प्रभु के जन्मस्थान पर भव्य मंदिर के लिए संघर्ष की गाथा का बखान करेंगे।</li>
              <li>जब हम सब मिलकर इस पुस्तक-ग्रंथ का वैश्विक स्तर पर प्रसार करेंगे तो निस्संदेह सनातन परिवार समेत भगवती सीता एवं प्रभु श्रीरामजी में आस्था रखने वाले अपनी संस्कृति पर गौरवान्वित होंगे। यह ग्रंथ अपने सर्वोच्च लक्ष्य को प्राप्त करे और विश्वभर में ख्याति मिले, प्रभु से ऐसी प्रार्थना के साथ, रामायण रिसर्च काउंसिल की पूरी टीम को साधुवाद।</li>
              <div className="text-block">स्वामी अवधेशानंद गिरि जी महाराज</div>
              <div className="text-block">आचार्य महामंडलेश्वर, जूना अखाड़ा</div>
            </ul>
            {/* <a href="#">Read More</a> */}
          </div>
        </div>
      </div>
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/book about us _files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>Address</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>Phone</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>Phone</span>
                  <p><a href="mailto:info@ramayanparivar.com">info@ramayanparivar.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>Quick links</span>
                  <ul>
                    <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">About Us</a></li>
                    <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">Our Aim</a></li>
                    <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">Objectives</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>Quick links</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>Ramayana Research Council’ is a registered organization in the form of ‘trust’ with a
                    purpose to promote the cultural values of our country</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function BookHomeContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">ग्रंथ की प्रस्तावना</a></li>
                        <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                        <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                        <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                        <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://rammandirbook.com/index.html" target="_blank" rel="noopener noreferrer"><img alt="Ramaynmanch" src="/assets/book.com_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">मीडिया</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                        <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">ग्रंथ की प्रस्तावना</a></li>
                          <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                          <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                          <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                          <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                          <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <ul className="banner_slider slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12060, transform: 'translate3d(-4020px, 0px, 0px)'}}><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-4.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={0} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-1.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={1} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-2.png" />
                </li><li aria-hidden="false" className="slick-slide slick-current slick-active" data-slick-index={2} style={{width: 1340}} tabIndex={0}>
                  <img alt="image1" src="/assets/book.com_files/slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={3} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-4.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={4} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-1.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={5} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-2.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={6} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={7} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book.com_files/slider-4.png" />
                </li></div></div>
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button></ul>
        </div>
      </div>
      <section className="iu-section">
        <div className="iu-container">
          <h1 className="section-heading">ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’-</h1>
          <p className="iu-text">
            अयोध्या में प्रभु श्रीरामलला के मंदिर संघर्ष पर आधारित 1250 पृष्ठों का एक ग्रंथ है- ‘श्रीरामलला- मन से मंदिर तक’। इस ग्रंथ में अयोध्या की पौराणिक, ऐतिहासिक, सांस्कृतिक, राजनीतिक, सामाजिक, धार्मिक विषयों को शामिल करने के साथ 250 से अधिक महानुभावों के सकारात्मक विचारों को सम्मिलित किया गया है।
            हिन्दी भाषा में यह ग्रंथ तैयार हो चुका है। 10 अन्य अंतरराष्ट्रीय भाषाओं में इसके अनुवाद पर कार्य चल रहा है। 21 देशों में इसका विमोचन करना है तथा संयुक्त राष्ट्र के सभी देशों में इसका डिजिटल रूप से प्रसार करना है।
            कोरोनाकाल के बाद श्री सुशांत अपनी टीम के साथ ग्रंथ- ‘श्रीरामला- मन से मंदिर तक’ पर कार्य करते रहे। 31 अगस्त 2021 को माननीय प्रधानमंत्री श्री नरेंद्र मोदी जी ने श्री कुमार सुशांत को मिलने का समय दिया। रामायण रिसर्च काउंसिल के बोर्ड ऑफ ट्रस्टी के श्री अजय भट्ट जी ने मा. प्रधानमंत्री जी के समक्ष अपने विषय को सुंदर स्वरूप में प्रस्तुत किया। श्री सुशांत ने ग्रंथ के पूरे विषय से मा. प्रधानमंत्री जी को अवगत कराया। मा. प्रधानमंत्री ने पूरे विषय को समझते हुए अपना अमूल्य मार्गदर्शन भी प्रदान किया। ग्रंथ लेखन के क्रम में श्री सुशांत को देश के जाने-माने लोकप्रिय संतों का असीम स्नेह भी प्राप्त हुआ। </p>
          <div className="iu-handle">श्रीरामलला- मन से मंदिर तक</div>
          <p className="iu-text">
            आज हर्ष का विषय है कि अयोध्या में श्रीराम मंदिर संघर्ष के ऊपर 1250 पृष्ठों का ग्रंथ भी पूर्ण हुआ। आज इस ग्रंथ का हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में इसका अनुवाद भी हो रहा है। ग्रंथ का 21 से अधिक देशों में विमोचन किया जाना है तथा संयुक्त राष्ट्र के कई देशों में डिजिटल रूप से प्रसार होना प्रस्तावित है। ग्रंथ में अयोध्या की सांस्कृतिक, आध्यात्मिक एवं ऐतिहासिक महत्ता से लेकर मंदिर-संघर्ष के कानूनी, राजनीतिक, सामाजिक... कई सारे पहलुओं को शामिल किया गया है। ग्रंथ में मां सीताजी एवं प्रभु श्रीराम के मानव-कल्याण संदेशों को विस्तार से शामिल किया गया है। इस ग्रंथ में संकलन एवं शोध-कार्यों के अलावा विभिन्न क्षेत्रों के 250 से अधिक विद्वानों के आलेखों को भी शामिल किया गया है। काउंसिल ने ग्रंथ प्रकाशन समिति गठित कर इसका वैश्विक स्तर पर प्रसार करने का संकल्प लिया है।</p>
          <a className="iu-link" href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">और अधिक पढ़ने के लिए →</a>
        </div>
        <div className="section-heading">काउंसिल के प्रमुख प्रकल्प</div>
      </section>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/book.com_files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/book.com_files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/book.com_files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/book.com_files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/book.com_files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/book.com_files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/book.com_files/om_icon.png" /> संकल्प</div>
                <div className="heading">सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container slick-initialized slick-slider slick-dotted"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6700, transform: 'translate3d(-2680px, 0px, 0px)', transition: 'transform 500ms'}}><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book.com_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/book.com_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control10" aria-hidden="true" className="guidance_section_slider slick-slide" data-slick-index={0} id="slick-slide10" role="tabpanel" style={{width: 1340}} tabIndex={0}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book.com_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/book.com_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control11" aria-hidden="false" className="guidance_section_slider slick-slide slick-current slick-active" data-slick-index={1} id="slick-slide11" role="tabpanel" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book.com_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/book.com_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={2} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book.com_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/book.com_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={3} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book.com_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/book.com_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul></div></div>
            {/* <ul class="guidance_section_slider">
                  <li class="two-col-left">
                      <div class="sub_title"><img src="https://www.ramayanresearchcouncil.com/images/om_icon.png" alt="om" /> Guidance</div>
                      <div class="heading">Our Mentors</div>
                      <div class="tag_line"><span></span>Saints are our far-sighted visionaries. The person or organization that works on the orders and instructions of saints never faces any kind of problem.</div>
                      <p>The Ramayana Research Council has been working to fulfil its objectives with the consultation and advice of renowned saints. There are many such saints but it's not possible to mention the names of all of them but mentioning few names here.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi voluptates soluta eligendi perferendis ducimus minus repellat voluptatum, laboriosam sed dolore fugit veniam exercitationem at mollitia? Dolore debitis perspiciatis libero.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est esse dolorem architecto, ipsa praesentium eos corporis, aperiam, exercitationem distinctio quia. Deleniti dicta placeat minima molestias dolorum, excepturi voluptate exercitationem!   
                      </p>
                  </li>
                  <li class="two-col-right">
                      <ul class="mentor_item single-mentor">
                          <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/safeimagekit-For Backdrop.jpg" alt="pic" /> */}
            {/* <p>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज</p>
                              <span>महंत, उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उप्र</span> */}
            {/* </li> */}
            {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor4.png" alt="pic" />
                              <p>महामण्डलेश्वर गीता मनीषी पूज्य स्वामी श्री ज्ञानानंद जी महाराज</p>
                              <span>करनाल, हरियाणा</span>
                          </li> */}
            {/* </ul> */}
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button><ul className="slick-dots" role="tablist" style={{}}><li className="" role="presentation"><button aria-controls="slick-slide10" aria-label="1 of 2" aria-selected="true" id="slick-slide-control10" role="tab" tabIndex={0} type="button">1</button></li><li className="slick-active" role="presentation"><button aria-controls="slick-slide11" aria-label="2 of 2" id="slick-slide-control11" role="tab" tabIndex={-1} type="button">2</button></li></ul></div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{display: 'inline-block'}} type="button">Previous</button>
              <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12900, transform: 'translate3d(-4515px, 0px, 0px)', transition: 'transform 500ms'}}><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-2} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={0} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={1} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={2} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={3} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={4} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-current slick-active" data-slick-index={5} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-active" data-slick-index={6} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={7} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={8} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={9} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={10} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={11} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={12} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={13} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={14} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={15} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={16} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={17} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book.com_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div></div></div>
              <button aria-label="Next" className="slick-next slick-arrow" style={{display: 'inline-block'}} type="button">Next</button></div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/book.com_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a></li>
                    <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function BookForRamContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">ग्रंथ की प्रस्तावना</a></li>
                        <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                        <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                        <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                        <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://rammandirbook.com/index.html" target="_blank" rel="noopener noreferrer"><img alt="Ramaynmanch" src="/assets/book for ram_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">मीडिया</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                        <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">ग्रंथ की प्रस्तावना</a></li>
                          <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                          <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                          <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                          <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                          <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <ul className="banner_slider slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12060, transform: 'translate3d(-2680px, 0px, 0px)'}}><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-4.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={0} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-1.png" />
                </li><li aria-hidden="false" className="slick-slide slick-current slick-active" data-slick-index={1} style={{width: 1340}} tabIndex={0}>
                  <img alt="image1" src="/assets/book for ram_files/slider-2.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={2} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={3} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-4.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={4} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-1.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={5} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-2.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={6} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={7} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/book for ram_files/slider-4.png" />
                </li></div></div>
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button></ul>
        </div>
      </div>
      <section className="iu-section">
        <div className="iu-container">
          <h1 className="section-heading">ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’-</h1>
          <p className="iu-text">
            अयोध्या में प्रभु श्रीरामलला के मंदिर संघर्ष पर आधारित 1250 पृष्ठों का एक ग्रंथ है- ‘श्रीरामलला- मन से मंदिर तक’। इस ग्रंथ में अयोध्या की पौराणिक, ऐतिहासिक, सांस्कृतिक, राजनीतिक, सामाजिक, धार्मिक विषयों को शामिल करने के साथ 250 से अधिक महानुभावों के सकारात्मक विचारों को सम्मिलित किया गया है।
            हिन्दी भाषा में यह ग्रंथ तैयार हो चुका है। 10 अन्य अंतरराष्ट्रीय भाषाओं में इसके अनुवाद पर कार्य चल रहा है। 21 देशों में इसका विमोचन करना है तथा संयुक्त राष्ट्र के सभी देशों में इसका डिजिटल रूप से प्रसार करना है।
            कोरोनाकाल के बाद श्री सुशांत अपनी टीम के साथ ग्रंथ- ‘श्रीरामला- मन से मंदिर तक’ पर कार्य करते रहे। 31 अगस्त 2021 को माननीय प्रधानमंत्री श्री नरेंद्र मोदी जी ने श्री कुमार सुशांत को मिलने का समय दिया। रामायण रिसर्च काउंसिल के बोर्ड ऑफ ट्रस्टी के श्री अजय भट्ट जी ने मा. प्रधानमंत्री जी के समक्ष अपने विषय को सुंदर स्वरूप में प्रस्तुत किया। श्री सुशांत ने ग्रंथ के पूरे विषय से मा. प्रधानमंत्री जी को अवगत कराया। मा. प्रधानमंत्री ने पूरे विषय को समझते हुए अपना अमूल्य मार्गदर्शन भी प्रदान किया। ग्रंथ लेखन के क्रम में श्री सुशांत को देश के जाने-माने लोकप्रिय संतों का असीम स्नेह भी प्राप्त हुआ। </p>
          <div className="iu-handle">श्रीरामलला- मन से मंदिर तक</div>
          <p className="iu-text">
            आज हर्ष का विषय है कि अयोध्या में श्रीराम मंदिर संघर्ष के ऊपर 1250 पृष्ठों का ग्रंथ भी पूर्ण हुआ। आज इस ग्रंथ का हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में इसका अनुवाद भी हो रहा है। ग्रंथ का 21 से अधिक देशों में विमोचन किया जाना है तथा संयुक्त राष्ट्र के कई देशों में डिजिटल रूप से प्रसार होना प्रस्तावित है। ग्रंथ में अयोध्या की सांस्कृतिक, आध्यात्मिक एवं ऐतिहासिक महत्ता से लेकर मंदिर-संघर्ष के कानूनी, राजनीतिक, सामाजिक... कई सारे पहलुओं को शामिल किया गया है। ग्रंथ में मां सीताजी एवं प्रभु श्रीराम के मानव-कल्याण संदेशों को विस्तार से शामिल किया गया है। इस ग्रंथ में संकलन एवं शोध-कार्यों के अलावा विभिन्न क्षेत्रों के 250 से अधिक विद्वानों के आलेखों को भी शामिल किया गया है। काउंसिल ने ग्रंथ प्रकाशन समिति गठित कर इसका वैश्विक स्तर पर प्रसार करने का संकल्प लिया है।</p>
          <a className="iu-link" href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">और अधिक पढ़ने के लिए →</a>
        </div>
        <div className="section-heading">काउंसिल के प्रमुख प्रकल्प</div>
      </section>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/book for ram_files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/book for ram_files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/book for ram_files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/book for ram_files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/book for ram_files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/book for ram_files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/book for ram_files/om_icon.png" /> संकल्प</div>
                <div className="heading">सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://rammandirbook.com/#" target="_blank" rel="noopener noreferrer">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container slick-initialized slick-slider slick-dotted"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6700, transform: 'translate3d(-2680px, 0px, 0px)', transition: 'transform 500ms'}}><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book for ram_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/book for ram_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control10" aria-hidden="true" className="guidance_section_slider slick-slide" data-slick-index={0} id="slick-slide10" role="tabpanel" style={{width: 1340}} tabIndex={0}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book for ram_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/book for ram_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control11" aria-hidden="false" className="guidance_section_slider slick-slide slick-current slick-active" data-slick-index={1} id="slick-slide11" role="tabpanel" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book for ram_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/book for ram_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={2} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book for ram_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/book for ram_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={3} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/book for ram_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/book for ram_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul></div></div>
            {/* <ul class="guidance_section_slider">
                  <li class="two-col-left">
                      <div class="sub_title"><img src="https://www.ramayanresearchcouncil.com/images/om_icon.png" alt="om" /> Guidance</div>
                      <div class="heading">Our Mentors</div>
                      <div class="tag_line"><span></span>Saints are our far-sighted visionaries. The person or organization that works on the orders and instructions of saints never faces any kind of problem.</div>
                      <p>The Ramayana Research Council has been working to fulfil its objectives with the consultation and advice of renowned saints. There are many such saints but it's not possible to mention the names of all of them but mentioning few names here.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi voluptates soluta eligendi perferendis ducimus minus repellat voluptatum, laboriosam sed dolore fugit veniam exercitationem at mollitia? Dolore debitis perspiciatis libero.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est esse dolorem architecto, ipsa praesentium eos corporis, aperiam, exercitationem distinctio quia. Deleniti dicta placeat minima molestias dolorum, excepturi voluptate exercitationem!   
                      </p>
                  </li>
                  <li class="two-col-right">
                      <ul class="mentor_item single-mentor">
                          <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/safeimagekit-For Backdrop.jpg" alt="pic" /> */}
            {/* <p>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज</p>
                              <span>महंत, उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उप्र</span> */}
            {/* </li> */}
            {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor4.png" alt="pic" />
                              <p>महामण्डलेश्वर गीता मनीषी पूज्य स्वामी श्री ज्ञानानंद जी महाराज</p>
                              <span>करनाल, हरियाणा</span>
                          </li> */}
            {/* </ul> */}
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button><ul className="slick-dots" role="tablist" style={{}}><li className="" role="presentation"><button aria-controls="slick-slide10" aria-label="1 of 2" aria-selected="true" id="slick-slide-control10" role="tab" tabIndex={0} type="button">1</button></li><li className="slick-active" role="presentation"><button aria-controls="slick-slide11" aria-label="2 of 2" id="slick-slide-control11" role="tab" tabIndex={-1} type="button">2</button></li></ul></div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{display: 'inline-block'}} type="button">Previous</button>
              <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12900, transform: 'translate3d(-3225px, 0px, 0px)', transition: 'transform 500ms'}}><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-2} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={0} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={1} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={2} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-current slick-active" data-slick-index={3} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-active" data-slick-index={4} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={5} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={6} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={7} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={8} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={9} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={10} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={11} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={12} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={13} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={14} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={15} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={16} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={17} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/book for ram_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div></div></div>
              <button aria-label="Next" className="slick-next slick-arrow" style={{display: 'inline-block'}} type="button">Next</button></div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/book for ram_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a></li>
                    <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function RamayanManchContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://ramayanmanch.com/#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://ramayanmanch.com/about-us.html">रामायण मंच</a></li>
                        <li><a href="https://ramayanmanch.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://ramayanmanch.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://ramayanmanch.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://ramayanmanch.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://ramayanmanch.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://ramayanmanch.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://ramayanmanch.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://ramayanmanch.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://ramayanmanch.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://ramayanmanch.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://ramayanmanch.com/index.html"><img alt="Ramaynmanch" src="/assets/ramayan manch _files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://ramayanmanch.com/#">मीडिया</a>
                      <ul>
                        <li><a href="https://ramayanmanch.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://ramayanmanch.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://ramayanmanch.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://ramayanmanch.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://ramayanmanch.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://ramayanmanch.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://ramayanmanch.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://ramayanmanch.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://ramayanmanch.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://ramayanmanch.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://ramayanmanch.com/#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://ramayanmanch.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://ramayanmanch.com/about-us.html">रामायण मंच</a></li>
                          <li><a href="https://ramayanmanch.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://ramayanmanch.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://ramayanmanch.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://ramayanmanch.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://ramayanmanch.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://ramayanmanch.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://ramayanmanch.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://ramayanmanch.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://ramayanmanch.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://ramayanmanch.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://ramayanmanch.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://ramayanmanch.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://ramayanmanch.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://ramayanmanch.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://ramayanmanch.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://ramayanmanch.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://ramayanmanch.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://ramayanmanch.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://ramayanmanch.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://ramayanmanch.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://ramayanmanch.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <ul className="banner_slider slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12060, transform: 'translate3d(-4020px, 0px, 0px)'}}><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-4.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={0} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-1.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={1} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-2.png" />
                </li><li aria-hidden="false" className="slick-slide slick-current slick-active" data-slick-index={2} style={{width: 1340}} tabIndex={0}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={3} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-4.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={4} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-1.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={5} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-2.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={6} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={7} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/ramayan manch _files/slider-4.png" />
                </li></div></div>
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button></ul>
        </div>
      </div>
      <section className="iu-section">
        <div className="iu-container">
          <h1 className="section-heading">छोटे बच्चों में संस्कार के संवर्धन हेतु ‘रामायण मंच’</h1>
          <p className="iu-text">
            ‘रामायण मंच’ रामायण रिसर्च काउंसिल (ट्रस्ट के रूप में पंजीकृत) का एक प्रकल्प है जिसका उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है। इसकी आवश्यकता इसलिए आई क्योंकि आज हमारे सामने बहुत बड़ी चुनौती है। चुनौती है, इस डिजिटल और आधुनिक युग में अपने घर के बच्चों को आपत्तिजनक विषयों से बचाने की। एक कटु सत्य है कि बच्चों को स्कूलों में शिक्षा तो मिल रही है, लेकिन उनमें संस्कार और अनुशासन का लोप होता जा रहा है। उनमें धैर्य की कमी होती जा रही है।              </p>
          <div className="iu-handle">रामायण मंच</div>
          <p className="iu-text">
            विस्तार से चर्चा करें तो ‘रामायण मंच’ का उद्देश्य है- बच्चों में अनुशासन, संस्कार एवं सांस्कृतिक भावनाओं को बढ़ाना। एक आदर्श जीवन कैसा होना चाहिए, इसका उदाहरण देना और संदर्भ देना श्रीरामचरितमानस का। ऐसे श्लोक व चौपाइ, जिनसे हमें कुछ संदेश मिलता है और जो हमारी लौकिक समस्याओं का भी समाधान करता है, उनके प्रति बच्चों में चेतना जागृत करना। काउंसिल का मानना है कि यही वो पुनीत कार्य और सूत्र हो सकता है जिससे हम आने वाली पीढ़ी को सुसंस्कृत भी कर सकते हैं।
          </p>
          <a className="iu-link" href="https://ramayanmanch.com/about-us.html">और पढ़ें →</a>
        </div>
        <div className="section-heading">काउंसिल के प्रमुख प्रकल्प</div>
      </section>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/ramayan manch _files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/ramayan manch _files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/ramayan manch _files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/ramayan manch _files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/ramayan manch _files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/ramayan manch _files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/ramayan manch _files/om_icon.png" /> संकल्प</div>
                <div className="heading">सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://ramayanmanch.com/#">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container slick-initialized slick-slider slick-dotted"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6700, transform: 'translate3d(-2680px, 0px, 0px)'}}><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/ramayan manch _files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/ramayan manch _files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control10" aria-hidden="true" className="guidance_section_slider slick-slide" data-slick-index={0} id="slick-slide10" role="tabpanel" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/ramayan manch _files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/ramayan manch _files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control11" aria-hidden="false" className="guidance_section_slider slick-slide slick-current slick-active" data-slick-index={1} id="slick-slide11" role="tabpanel" style={{width: 1340}} tabIndex={0}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/ramayan manch _files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/ramayan manch _files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={2} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/ramayan manch _files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/ramayan manch _files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={3} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/ramayan manch _files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/ramayan manch _files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul></div></div>
            {/* <ul class="guidance_section_slider">
                  <li class="two-col-left">
                      <div class="sub_title"><img src="https://www.ramayanresearchcouncil.com/images/om_icon.png" alt="om" /> Guidance</div>
                      <div class="heading">Our Mentors</div>
                      <div class="tag_line"><span></span>Saints are our far-sighted visionaries. The person or organization that works on the orders and instructions of saints never faces any kind of problem.</div>
                      <p>The Ramayana Research Council has been working to fulfil its objectives with the consultation and advice of renowned saints. There are many such saints but it's not possible to mention the names of all of them but mentioning few names here.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi voluptates soluta eligendi perferendis ducimus minus repellat voluptatum, laboriosam sed dolore fugit veniam exercitationem at mollitia? Dolore debitis perspiciatis libero.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est esse dolorem architecto, ipsa praesentium eos corporis, aperiam, exercitationem distinctio quia. Deleniti dicta placeat minima molestias dolorum, excepturi voluptate exercitationem!   
                      </p>
                  </li>
                  <li class="two-col-right">
                      <ul class="mentor_item single-mentor">
                          <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/safeimagekit-For Backdrop.jpg" alt="pic" /> */}
            {/* <p>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज</p>
                              <span>महंत, उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उप्र</span> */}
            {/* </li> */}
            {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor4.png" alt="pic" />
                              <p>महामण्डलेश्वर गीता मनीषी पूज्य स्वामी श्री ज्ञानानंद जी महाराज</p>
                              <span>करनाल, हरियाणा</span>
                          </li> */}
            {/* </ul> */}
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button><ul className="slick-dots" role="tablist" style={{}}><li className="" role="presentation"><button aria-controls="slick-slide10" aria-label="1 of 2" id="slick-slide-control10" role="tab" tabIndex={-1} type="button">1</button></li><li className="slick-active" role="presentation"><button aria-controls="slick-slide11" aria-label="2 of 2" aria-selected="true" id="slick-slide-control11" role="tab" tabIndex={0} type="button">2</button></li></ul></div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{display: 'inline-block'}} type="button">Previous</button>
              <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12900, transform: 'translate3d(-4515px, 0px, 0px)'}}><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-2} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={0} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={1} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={2} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={3} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={4} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-current slick-active" data-slick-index={5} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-active" data-slick-index={6} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={7} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={8} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={9} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={10} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={11} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={12} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={13} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={14} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={15} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={16} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={17} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/ramayan manch _files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div></div></div>
              <button aria-label="Next" className="slick-next slick-arrow" style={{display: 'inline-block'}} type="button">Next</button></div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/ramayan manch _files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://ramayanmanch.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://ramayanmanch.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function OurWorkForSitaContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://maasita.com/#" target="_blank" rel="noopener noreferrer">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://maasita.com/about-us.html" target="_blank" rel="noopener noreferrer">सीतामढ़ी में काउंसिल का संकल्प</a></li>
                        <li><a href="https://maasita.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                        <li><a href="https://maasita.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://maasita.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a>
                      <ul>
                        <li><a href="https://maasita.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                        <li><a href="https://maasita.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                        <li><a href="https://maasita.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://maasita.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                        <li><a href="https://maasita.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                        <li><a href="https://maasita.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://maasita.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://maasita.com/index.html" target="_blank" rel="noopener noreferrer"><img alt="Ramaynmanch" src="/assets/our work for sita_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://maasita.com/#" target="_blank" rel="noopener noreferrer">मीडिया</a>
                      <ul>
                        <li><a href="https://maasita.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                        <li><a href="https://maasita.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                        <li><a href="https://maasita.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://maasita.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://maasita.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://maasita.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a>
                      <ul>
                        <li><a href="https://maasita.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                        <li><a href="https://maasita.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://maasita.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a>
                      <ul>
                        <li><a href="https://maasita.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://maasita.com/#" target="_blank" rel="noopener noreferrer">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://maasita.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/about-us.html" target="_blank" rel="noopener noreferrer">सीतामढ़ी में काउंसिल का संकल्प</a></li>
                          <li><a href="https://maasita.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                          <li><a href="https://maasita.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://maasita.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                          <li><a href="https://maasita.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                          <li><a href="https://maasita.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://maasita.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                          <li><a href="https://maasita.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                          <li><a href="https://maasita.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://maasita.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://maasita.com/about-us.html" target="_blank" rel="noopener noreferrer">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                          <li><a href="https://maasita.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                          <li><a href="https://maasita.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://maasita.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://maasita.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://maasita.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                          <li><a href="https://maasita.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://maasita.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <ul className="banner_slider slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12060, transform: 'translate3d(-2680px, 0px, 0px)'}}><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image image" src="/assets/our work for sita_files/maa-sita-slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={0} style={{width: 1340}} tabIndex={-1}>
                  <img alt="slider image" src="/assets/our work for sita_files/maa-sita-slider-1.png" />
                </li><li aria-hidden="false" className="slick-slide slick-current slick-active" data-slick-index={1} style={{width: 1340}} tabIndex={0}>
                  <img alt="slider image" src="/assets/our work for sita_files/maa-sita-slider-2.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={2} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image image" src="/assets/our work for sita_files/Slider-3.jpg" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={3} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image image" src="/assets/our work for sita_files/maa-sita-slider-3.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={4} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="slider image" src="/assets/our work for sita_files/maa-sita-slider-1.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={5} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="slider image" src="/assets/our work for sita_files/maa-sita-slider-2.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={6} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image image" src="/assets/our work for sita_files/Slider-3.jpg" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={7} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image image" src="/assets/our work for sita_files/maa-sita-slider-3.png" />
                </li></div></div>
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button></ul>
        </div>
      </div>
      <section className="iu-section">
        <div className="iu-container">
          <div className="section-heading">'सीतामढ़ी में काउंसिल का संकल्प'</div>
          <h1 className="iu-heading" />
          <p className="iu-text">
            ‘रामायण रिसर्च काउंसिल’ मां सीताजी के प्राकट्य-क्षेत्र सीतामढ़ी (बिहार) को तीर्थ-क्षेत्र के रूप में विकसित करने तथा सीतामढ़ी में ही माता सीताजी के भव्य मंदिर-निर्माण के लिए वर्ष 2020 से ही प्रयत्न कर रही है। काउंसिल ने पिछले पांच वर्षों के दौरान सीतामढ़ी में, पटना में, दिल्ली समेत कई राज्यों में इस दिशा में कई बार जन-जागरूकता अभियान तथा जन-संपर्क अभियान चलाया, संगोष्ठी का आयोजन किया, साहित्य बंटवाया, प्रेस-वार्ता का आयोजन किया... प्रसन्नता का विषय है, हमारे देश के गृह मंत्री श्री अमित शाह जी ने गुजरात के गांधीनगर में 10 मार्च 2025 को एक कार्यक्रम के दौरान मां सीताजी के प्रकट-स्थल ‘पुनौरा धाम’ में भी मां सीताजी का एक भव्य मंदिर निर्माण की घोषणा की तथा 08 अगस्त 2025 को पुनौरा धाम में मां सीताजी के भव्य मंदिर निर्माण हेतु आधारशिला भी रख दी। 
          </p>
          <div className="iu-handle">माँ सीता जी</div>
          <p className="iu-text">
            वहीं, काउंसिल के प्रयत्नों को देखते हुए बिहार सरकार अंतर्गत बिहार राज्य धार्मिक न्यास पर्षद ने 19 मई 2025 को काउंसिल को लगभग 12 एकड़ भूमि आवंटित कर दी तथा 23 मई 2025 को भूमि के निबंधन की प्रक्रिया भी पूरी हो गई। यह स्थान मां सीताजी के प्राकट्य-स्थान पुनौरा धाम से चार किलोमीटर दूर है। यह भूमि सीतामढ़ी में 833 वर्ष पुराने राघोपुर बखरी स्थित श्रीराम-जानकी स्थान की है, जो आज जीर्ण-शीर्ण अवस्था में है और एक पौराणिक मठ है और मठ के सामने एक खाली ज़मीन है, जिस पर नए मंदिर का निर्माण किया जाना है। काउंसिल परिवार का चिंतन है कि यहां 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर इस स्थान को एक शक्ति-स्थल के रूप में विकसित करना है।
          </p>
          <a className="iu-link" href="https://maasita.com/about-us.html" target="_blank" rel="noopener noreferrer">और पढ़ें →</a>
        </div>
        <div className="section-heading">काउंसिल के प्रमुख प्रकल्प</div>
      </section>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/our work for sita_files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/our work for sita_files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/our work for sita_files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/our work for sita_files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/our work for sita_files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/our work for sita_files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/our work for sita_files/om_icon.png" /> संकल्प</div>
                <div className="heading">सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://maasita.com/#" target="_blank" rel="noopener noreferrer">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container slick-initialized slick-slider slick-dotted"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6700, transform: 'translate3d(-2680px, 0px, 0px)'}}><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/our work for sita_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/our work for sita_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control10" aria-hidden="true" className="guidance_section_slider slick-slide" data-slick-index={0} id="slick-slide10" role="tabpanel" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/our work for sita_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/our work for sita_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control11" aria-hidden="false" className="guidance_section_slider slick-slide slick-current slick-active" data-slick-index={1} id="slick-slide11" role="tabpanel" style={{width: 1340}} tabIndex={0}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/our work for sita_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/our work for sita_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={2} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/our work for sita_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/our work for sita_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={3} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/our work for sita_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/our work for sita_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul></div></div>
            {/* <ul class="guidance_section_slider">
                  <li class="two-col-left">
                      <div class="sub_title"><img src="https://www.ramayanresearchcouncil.com/images/om_icon.png" alt="om" /> Guidance</div>
                      <div class="heading">Our Mentors</div>
                      <div class="tag_line"><span></span>Saints are our far-sighted visionaries. The person or organization that works on the orders and instructions of saints never faces any kind of problem.</div>
                      <p>The Ramayana Research Council has been working to fulfil its objectives with the consultation and advice of renowned saints. There are many such saints but it's not possible to mention the names of all of them but mentioning few names here.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi voluptates soluta eligendi perferendis ducimus minus repellat voluptatum, laboriosam sed dolore fugit veniam exercitationem at mollitia? Dolore debitis perspiciatis libero.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est esse dolorem architecto, ipsa praesentium eos corporis, aperiam, exercitationem distinctio quia. Deleniti dicta placeat minima molestias dolorum, excepturi voluptate exercitationem!   
                      </p>
                  </li>
                  <li class="two-col-right">
                      <ul class="mentor_item single-mentor">
                          <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/safeimagekit-For Backdrop.jpg" alt="pic" /> */}
            {/* <p>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज</p>
                              <span>महंत, उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उप्र</span> */}
            {/* </li> */}
            {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor4.png" alt="pic" />
                              <p>महामण्डलेश्वर गीता मनीषी पूज्य स्वामी श्री ज्ञानानंद जी महाराज</p>
                              <span>करनाल, हरियाणा</span>
                          </li> */}
            {/* </ul> */}
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button><ul className="slick-dots" role="tablist" style={{}}><li className="" role="presentation"><button aria-controls="slick-slide10" aria-label="1 of 2" id="slick-slide-control10" role="tab" tabIndex={-1} type="button">1</button></li><li className="slick-active" role="presentation"><button aria-controls="slick-slide11" aria-label="2 of 2" aria-selected="true" id="slick-slide-control11" role="tab" tabIndex={0} type="button">2</button></li></ul></div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{display: 'inline-block'}} type="button">Previous</button>
              <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12900, transform: 'translate3d(-3225px, 0px, 0px)'}}><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-2} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={0} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={1} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={2} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-current slick-active" data-slick-index={3} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-active" data-slick-index={4} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={5} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={6} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={7} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={8} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={9} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={10} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={11} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={12} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={13} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={14} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={15} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={16} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={17} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/our work for sita_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div></div></div>
              <button aria-label="Next" className="slick-next slick-arrow" style={{display: 'inline-block'}} type="button">Next</button></div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/our work for sita_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://maasita.com/about-us.html" target="_blank" rel="noopener noreferrer">सीतामढ़ी में काउंसिल का संकल्प</a></li>
                    <li><a href="https://maasita.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a></li>
                    <li><a href="https://maasita.com/our-aim.html" target="_blank" rel="noopener noreferrer">हमारे उद्देश्य</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function MahakumbhContent() {
  return (
    <div className="mahakumbh-page">
      <header>
        <div className="container-fluid">
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/mahakumbh_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container banner_container">
          <div className="banner_marquee" aria-label="Mahakumbh highlights">
            <ul className="banner_slider banner_marquee__track">
              <li><img alt="Mahakumbh highlight 1" src="/assets/mahakumbh_files/1 (1).png" /></li>
              <li><img alt="Mahakumbh highlight 2" src="/assets/mahakumbh_files/2 (1).png" /></li>
              <li><img alt="Mahakumbh highlight 3" src="/assets/mahakumbh_files/3 (1).png" /></li>
              <li><img alt="Mahakumbh highlight 4" src="/assets/mahakumbh_files/4 (1).png" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/mahakumbh_files/1 (1).png" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/mahakumbh_files/2 (1).png" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/mahakumbh_files/3 (1).png" /></li>
              <li aria-hidden="true"><img alt="" src="/assets/mahakumbh_files/4 (1).png" /></li>
            </ul>
          </div>
        </div>
      </div>
      <section className="iu-section">
        <div className="iu-container">
          <h1 className="section-heading">काउंसिल के प्रकल्प "महाकुंभ इन्फो" के विषय में जानिए</h1>
          <p className="iu-text">
            जैसा आप सबों के संज्ञान में है कि ‘रामायण रिसर्च काउंसिल’ ट्रस्ट के रूप में एक पंजीकृत संस्था है जो देश में संस्कार एवं सांस्कृतिक मूल्यों के संवर्धन हेतु कई प्रकल्पों पर कार्य कर रही है। काउंसिल के मुख्य उद्देश्यों में से एक है- साहित्य का सृजन करना भी। काउंसिल कुंभ के ऐतिहासिक एवं पौराणिक महत्त्वों पर भी कार्य करती रही है। इसी क्रम में वर्ष 2025 में हुए तीर्थराज प्रयाग में महाकुंभ पर एक कॉफीटेबल बुक (साइज- 12/18 इंच) ‘महाकुंभ का महामंथन’ भी काउंसिल ने तैयार किया है।                 
          </p>
          <p className="iu-text">
            काउंसिल का मानना है कि कुंभ का संबंध समुद्र मंथन से है। ऐसे में कुंभ के दौरान पूज्य संतों के श्रीमुख से निकले हर एक शब्द को हम देवताओं के शब्द मानते हैं। ये वो शब्द हैं जिनसे राष्ट्र और विश्व को दिशा मिल सकती है, इसलिए रामायण रिसर्च काउंसिल पूज्य संतों के हर एक शब्द के साथ कुंभ के दौरान हुई प्रमुख गतिविधियों को भविष्य के लिए एक दस्तावेज बनाकर संग्रहित करने का कार्य कर रहे हैं। 
          </p>
          <a className="iu-link" href="https://mahakumbhinfo.com/about-us.html">और अधिक पढ़ने के लिए →</a>
        </div>
        <div className="section-heading">काउंसिल के प्रमुख प्रकल्प</div>
      </section>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/mahakumbh_files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ने के लिए</a>
                </li>
                <li>
                  <img alt="image" src="/assets/mahakumbh_files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ने के लिए</a>
                </li>
                <li>
                  <img alt="image" src="/assets/mahakumbh_files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ने के लिए</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/mahakumbh_files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/mahakumbh_files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/mahakumbh_files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/mahakumbh_files/om_icon.png" /> संकल्प</div>
                <div className="heading">सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://mahakumbhinfo.com/#">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container">
            <ul className="guidance_section_slider">
              <li className="two-col-left">
                <div className="sub_title"><img alt="om" src="/assets/mahakumbh_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
              </li>
              <li className="two-col-right">
                <ul className="mentor_item single-mentor">
                  <li>
                    <img alt="our mentor" src="/assets/mahakumbh_files/sanatan-sang-bharat-3.jpg" />
                    {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                  </li>
                  {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                </ul>
              </li>
            </ul>
            <ul className="guidance_section_slider">
              <li className="two-col-left">
                <div className="sub_title"><img alt="om" src="/assets/mahakumbh_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                  यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
              </li>
              <li className="two-col-right">
                <ul className="mentor_item single-mentor">
                  <li>
                    <img alt="pic" src="/assets/mahakumbh_files/vedant-pushp-pic-for-website.jpg" />
                    {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                  </li>
                  {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper">
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                    श्री राम जन्मभूमि पर राम मंदिर के
                    निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                    और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                  </p>
                  <div className="monk_details">
                    ARIF MOHAMMED KHAN
                    <span>GOVERNOR OF KERALA</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/Manohar_Lal_Khattar (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                  <div className="monk_details">
                    मनोहर लाल
                    <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/Narendra_Tomar (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                  <div className="monk_details">
                    नरेंद्र सिंह तोमर
                    <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/bhupendra_patel (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                    प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                    “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                  </p>
                  <div className="monk_details">
                    भूपेन्द्र पटेल
                    <span>मुख्यमंत्री, गुजरात राज्य</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/manbhai_patel (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                    सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                  <div className="monk_details">
                    मंगुभाई पटेल
                    <span>राज्यपाल, मध्यप्रदेश</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/Acharya_Devvrat (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                    शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                    मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                    यह जानकर अति प्रसन्नता हुई।</p>
                  <div className="monk_details">
                    Acharya Devvrat
                    <span>Governor, Gujarat</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/Brig.B.D.Mishra.jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                    आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                  <div className="monk_details">
                    Brig. (Dr.) B. D. Mishra (Retd.)
                    <span>Governor, Arunachal Pradesh</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/ram-ji (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                    मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                  <div className="monk_details">
                    Gitaben V. Rathava
                    <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                  </div>
                </div>
              </div>
              <div className="testimonials_items">
                <figure>
                  <img alt="pic" src="/assets/mahakumbh_files/Prof_Ganeshi_Laal (1).jpg" />
                </figure>
                <div className="testimonials_text">
                  <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                    मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                    अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                    उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                    "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                  <div className="monk_details">
                    Prof. Ganeshi Lal
                    <span>Governor, Odisha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/mahakumbh_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function EventsContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/events.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/events_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/events.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/events.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="custom-news-section">
        <div className="custom-news-wrapper">
          <h5 className="custom-news-heading">🕉 OUR LATEST NEWS 🕉</h5>
          <h2 className="custom-news-subheading">
            Read and explore your<br />
            knowledge through our news
          </h2>
          <div className="custom-news-grid">
            {/* start */}
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event1.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>July 30, 2024</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 03:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                The Council has decided to publish a fortnightly tabloid, which will be completely in Sanskrit language. 'Ramayan Varta' is to be launched not only in print, but also for a website www.ramayanvarta.com (ramayanvarta.com) and mobile-app.
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">Constitution Club, New Delhi</p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event2.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>July 08, 2023</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 04:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Resolved to make the world's tallest statue of Maa Bhagwati Sita in Sitamadhi
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                33, Sanskar Bharti, Deendayal Upadhyay Marg. You are cordially invited.
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event3.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>April 07, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 06:30 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Indradhanush Shri Shyam Nishan Shobha Yatra - इंद्रधनुष श्री श्याम निशान शोभा यात्रा दिनांक 3 मार्च 2023 संध्या 6:30 बजे स्थान:- देवी बाबू धर्मशाला नया भवन एम.पी. द्विवेदी रोड, भागलपुर, बिहार
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Devi Babu Dharamshala New Building M.P. Dwivedi Road, Bhagalpur, Bihar
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event4.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>April 07, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 03:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Dedication ceremony of Shri Bhagwati Sita Mahashakti Instrument
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Constitution Club
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event5.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>February 23, 2023</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 12:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Invitation Letter Ramayana Research Council You are cordially invited to the press conference for special information
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Bihar Industries Association Industry House, Sinha Library Road, Patna Bihar
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event6.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>October 28, 2020</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 05:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                All of you dignitaries will be honored with Digital Ramlila Manchan Prasar Sahayog Samman by Namo Mantra Foundation.
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                On the Facebook page of Namo Mantra Foundation
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event7.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>December 21, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 04:30 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Seminar organized under the aegis of Ramayana Research Council
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Deputy Speaker Hall Annexe Constitution Club, New Delhi
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event10.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>June 23, 2021</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 06:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                You are cordially invited to the webinar on the topic of resolution and preparation for wide
                distribution of the book 'Shri Ramlala Man Se Mandir Tak'
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                invited to the webinar
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event9.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>April 01, 2021</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 03:05 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                You are cordially invited to the meeting of the Legal Cell under the aegis of Ramayana Research Council.
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                33, Sanskar Bharti, Deendayal Upadhyay Marg. You are cordially invited.
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event11.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>February 10, 2020</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 02:30 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Press conference for maximum publicity of digital Ramlila staging under the aegis of Namo Mantra Foundation
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Hotel Sopan Heights 17A/36WEA Gurudwara Road, Karol Bagh New Delhi.
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event12.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>April 04, 2023</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 07:00 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Maithil Vikas Pratishthan Sneh Milan Program in Mumbai Balaji Banquet Hall, Shantipark, Mira Road
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Balaji Banquet Hall, Shantipark, Mira Road
              </p>
            </div>
            <div className="news-card">
              <img alt="Event" className="news-card-img" src="/assets/events_files/event13.png" />
              <div className="news-card-ribbon">
                <div className="ribbon-item">
                  <i className="fa-regular fa-calendar-days" />
                  <span>February 13, 2022</span>
                </div>
                <div className="ribbon-item">
                  <i className="fa-regular fa-clock" />
                  <span>Start at: 12:30 PM</span>
                </div>
              </div>
              <h3 className="news-card-title">#RamayanaVarta</h3>
              <p className="news-card-description">
                Press Conference
              </p>
              <hr className="location-separator" />
              <div className="location-wrapper">
                <span className="material-icons location-icon">location_on</span>
                <span className="location-label">Location</span>
              </div>
              <p className="location-address">
                Circuit House Sitamarhi Bihar
              </p>
            </div>
          </div>
        </div>
        <div className="see-more">
          <button id="seeMoreBtn" style={{display: 'none'}}>SEE MORE <span className="arrow">▼</span></button>
        </div>
      </section>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>Newsletter</span></div>
          <div class="section_heading">To get weekly & monthly <br />news,Subscribe to our newsletter</div>
          <form class="newsletter_form">
              <input type="email" placeholder="Your email address" />
              <input type="submit" value="Subscribe" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/events_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function PressContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/press.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/press_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/press.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/press.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">MEDIA CORNER</h1>
          </div>
        </div>
      </div>
      <section className="content-section">
        <img alt="World Map" className="background-image" src="/assets/press_files/map.png" />
        <div className="content">
          <p className="subtitle-one">🕉 OUR LATEST NEWS 🕉</p>
          <h1 className="news-title-one">
            Read and explore your<br />
            knowledge through our news
          </h1>
        </div>
      </section>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>Newsletter</span></div>
          <div class="section_heading">To get weekly & monthly <br />news,Subscribe to our newsletter</div>
          <form class="newsletter_form">
              <input type="email" placeholder="Your email address" />
              <input type="submit" value="Subscribe" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/press_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function PrintMediaCoverageContent() {
  useEffect(() => {
    const formatDate = (value) => {
      if (!value) return '';
      const parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) return value;
      return parsed.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    };

    const appendCards = (
      targetId,
      items,
      { includeDate, linkMode } = { includeDate: true, linkMode: 'link' }
    ) => {
      const target = document.getElementById(targetId);
      if (!target || !Array.isArray(items) || !items.length) return;
      target.innerHTML = '';
      const fragment = document.createDocumentFragment();
      items.forEach((item) => {
        const card = document.createElement('a');
        card.className = 'card';
        if (linkMode === 'image') {
          const imageHref = resolveMediaUrl(item.url || item.image || '');
          card.href = imageHref || '#';
          if (imageHref) {
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
          }
        } else {
          const href = item.link || item.url || '#';
          card.href = href;
          if (href && href !== '#') {
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
          }
        }
        const image = document.createElement('img');
        image.src = resolveMediaUrl(item.image || item.url || '');
        image.alt = item.title || item.alt || 'Gallery item';
        card.appendChild(image);
        if (includeDate) {
          const date = document.createElement('div');
          date.className = 'date';
          const label = formatDate(item.publishedAt || item.date || item.createdAt);
          if (label) {
            date.textContent = `📅 ${label}`;
            card.appendChild(date);
          }
        }
        fragment.appendChild(card);
      });
      target.prepend(fragment);
    };

    const load = async () => {
      try {
        const [newsRes, galleryRes] = await Promise.all([
          fetch(apiUrl('/api/news')),
          fetch(apiUrl('/api/gallery')),
        ]);
        const newsData = newsRes.ok ? await newsRes.json() : null;
        const galleryData = galleryRes.ok ? await galleryRes.json() : null;
        appendCards('newsGrid', newsData?.items || []);
        appendCards('galleryGrid', galleryData?.items || [], { includeDate: false, linkMode: 'image' });
      } catch {
        // Silent fallback to static cards if API isn't available.
      }
    };

    load();
  }, []);

  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/printgallery.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/print media coverage _files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/printgallery.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/printgallery.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">MEDIA CORNER</h1>
          </div>
        </div>
      </div>
      <section className="news-section">
        <div className="container">
          <div className="news-content">
            <h5>🕉 OUR LATEST NEWS 🕉</h5>
            <h2>
              Read and explore your<br />
              knowledge through our news
            </h2>
            <div className="grid" id="newsGrid">
              <a className="card" href="https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27" style={{}}>
                <img alt="News 1" src="/assets/print media coverage _files/news1.png" />
                <div className="date"> 📅 April 27, 2023</div>
              </a>
              <a className="card" href="https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27" style={{}}>
                <img alt="News 2" src="/assets/print media coverage _files/news2.png" />
                <div className="date"> 📅 April 23, 2023</div>
              </a>
              <a className="card" href="https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27" style={{}}>
                <img alt="News 3" src="/assets/print media coverage _files/news3.png" />
                <div className="date"> 📅 April 23, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{}}>
                <img alt="News 4" src="/assets/print media coverage _files/news4.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{}}>
                <img alt="News 5" src="/assets/print media coverage _files/news5.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{}}>
                <img alt="News 6" src="/assets/print media coverage _files/news6.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news7.png" />
                <div className="date"> 📅 April 06, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news8.png" />
                <div className="date">
                  &lt; 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print media coverage _files/news9.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print media coverage _files/news10.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news11.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news12.png" />
                <div className="date"> 📅 April 06, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news13.png" />
                <div className="date"> 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print media coverage _files/news14.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print media coverage _files/news15.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news16.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news17.png" />
                <div className="date"> 📅 April 06, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news18.png" />
                <div className="date"> 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print media coverage _files/news19.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print media coverage _files/news20.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news21.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news22.png" />
                <div className="date"> 📅 February 14, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news23.png" />
                <div className="date"> 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print media coverage _files/news24.png" />
                <div className="date"> 📅 February 14, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print media coverage _files/news25.png" />
                <div className="date"> 📅 June 19, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news26.png" />
                <div className="date"> 📅 April 28, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news27.png" />
                <div className="date"> 📅 March 28, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news28.png" />
                <div className="date"> 📅 November 11, 2023</div>
              </a>
              <a className="card" href="https://www.facebook.com/watch/?v=1178554166862669" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print media coverage _files/news29.png" />
                <div className="date"> 📅 October 10, 2024</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print media coverage _files/news30.png" />
                <div className="date"> 📅 February 23, 2024</div>
              </a>
              <a className="card" href="https://www.youtube.com/watch?v=Wem-9-_HVyw" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news31.png" />
                <div className="date"> 📅 February 23, 2023</div>
              </a>
              <a className="card" href="https://www.youtube.com/watch?v=2dj9tWazCx0" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print media coverage _files/news32.png" />
                <div className="date"> 📅 October 10, 2023</div>
              </a>
            </div>
            <div className="see-more">
              <button id="seeMoreBtn">SEE MORE <span className="arrow">▼</span></button>
            </div>
            <div className="section-title">Latest gallery uploads</div>
            <div className="grid" id="galleryGrid" />
          </div>
        </div>
        <div />
      </section>
      {/* <div class="newsletter-section">
        <div class="container">
    <div class="section_sub_heading"><span>Newsletter</span></div>
    <div class="section_heading">To get weekly & monthly <br />news,Subscribe to our newsletter</div>
    <form class="newsletter_form">
      <input type="email" placeholder="Your email address" />
      <input type="submit" value="Subscribe" />
    </form>
        </div>
      </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/print media coverage _files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function PrintGalleryContent() {
  useEffect(() => {
    const formatDate = (value) => {
      if (!value) return '';
      const parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) return value;
      return parsed.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    };

    const appendCards = (
      targetId,
      items,
      { includeDate, linkMode } = { includeDate: true, linkMode: 'link' }
    ) => {
      const target = document.getElementById(targetId);
      if (!target || !Array.isArray(items) || !items.length) return;
      target.innerHTML = '';
      const fragment = document.createDocumentFragment();
      items.forEach((item) => {
        const card = document.createElement('a');
        card.className = 'card';
        if (linkMode === 'image') {
          const imageHref = resolveMediaUrl(item.url || item.image || '');
          card.href = imageHref || '#';
          if (imageHref) {
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
          }
        } else {
          const href = item.link || item.url || '#';
          card.href = href;
          if (href && href !== '#') {
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
          }
        }
        const image = document.createElement('img');
        image.src = resolveMediaUrl(item.image || item.url || '');
        image.alt = item.title || item.alt || 'Gallery item';
        card.appendChild(image);
        if (includeDate) {
          const date = document.createElement('div');
          date.className = 'date';
          const label = formatDate(item.publishedAt || item.date || item.createdAt);
          if (label) {
            date.textContent = `📅 ${label}`;
            card.appendChild(date);
          }
        }
        fragment.appendChild(card);
      });
      target.prepend(fragment);
    };

    const load = async () => {
      try {
        const [newsRes, galleryRes] = await Promise.all([
          fetch(apiUrl('/api/news')),
          fetch(apiUrl('/api/gallery')),
        ]);
        const newsData = newsRes.ok ? await newsRes.json() : null;
        const galleryData = galleryRes.ok ? await galleryRes.json() : null;
        appendCards('newsGrid', newsData?.items || []);
        appendCards('galleryGrid', galleryData?.items || [], { includeDate: false, linkMode: 'image' });
      } catch {
        // Silent fallback to static cards if API isn't available.
      }
    };

    load();
  }, []);

  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/printgallery.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/print gallery_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/printgallery.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/printgallery.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">MEDIA CORNER</h1>
          </div>
        </div>
      </div>
      <section className="news-section">
        <div className="container">
          <div className="news-content">
            <h5>🕉 OUR LATEST NEWS 🕉</h5>
            <h2>
              Read and explore your<br />
              knowledge through our news
            </h2>
            <div className="grid" id="newsGrid">
              <a className="card" href="https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27" style={{}}>
                <img alt="News 1" src="/assets/print gallery_files/news1.png" />
                <div className="date"> 📅 April 27, 2023</div>
              </a>
              <a className="card" href="https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27" style={{}}>
                <img alt="News 2" src="/assets/print gallery_files/news2.png" />
                <div className="date"> 📅 April 23, 2023</div>
              </a>
              <a className="card" href="https://www.amarujala.com/india-news/ramayan-research-council-minister-ajay-bhatt-said-daughters-will-get-rites-by-worshiping-mother-sita-2023-04-27" style={{}}>
                <img alt="News 3" src="/assets/print gallery_files/news3.png" />
                <div className="date"> 📅 April 23, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{}}>
                <img alt="News 4" src="/assets/print gallery_files/news4.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{}}>
                <img alt="News 5" src="/assets/print gallery_files/news5.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{}}>
                <img alt="News 6" src="/assets/print gallery_files/news6.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news7.png" />
                <div className="date"> 📅 April 06, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news8.png" />
                <div className="date">
                  &lt; 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print gallery_files/news9.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print gallery_files/news10.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news11.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news12.png" />
                <div className="date"> 📅 April 06, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news13.png" />
                <div className="date"> 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print gallery_files/news14.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print gallery_files/news15.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news16.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news17.png" />
                <div className="date"> 📅 April 06, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news18.png" />
                <div className="date"> 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print gallery_files/news19.png" />
                <div className="date"> 📅 April 07, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print gallery_files/news20.png" />
                <div className="date"> 📅 February 04, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news21.png" />
                <div className="date"> 📅 July 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news22.png" />
                <div className="date"> 📅 February 14, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news23.png" />
                <div className="date"> 📅 August 07, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print gallery_files/news24.png" />
                <div className="date"> 📅 February 14, 2022</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print gallery_files/news25.png" />
                <div className="date"> 📅 June 19, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news26.png" />
                <div className="date"> 📅 April 28, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news27.png" />
                <div className="date"> 📅 March 28, 2023</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news28.png" />
                <div className="date"> 📅 November 11, 2023</div>
              </a>
              <a className="card" href="https://www.facebook.com/watch/?v=1178554166862669" style={{display: 'none'}}>
                <img alt="News 4" src="/assets/print gallery_files/news29.png" />
                <div className="date"> 📅 October 10, 2024</div>
              </a>
              <a className="card" href="https://mahakumbhinfo.com/printgallery.html#" style={{display: 'none'}}>
                <img alt="News 5" src="/assets/print gallery_files/news30.png" />
                <div className="date"> 📅 February 23, 2024</div>
              </a>
              <a className="card" href="https://www.youtube.com/watch?v=Wem-9-_HVyw" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news31.png" />
                <div className="date"> 📅 February 23, 2023</div>
              </a>
              <a className="card" href="https://www.youtube.com/watch?v=2dj9tWazCx0" style={{display: 'none'}}>
                <img alt="News 6" src="/assets/print gallery_files/news32.png" />
                <div className="date"> 📅 October 10, 2023</div>
              </a>
            </div>
            <div className="see-more">
              <button id="seeMoreBtn">SEE MORE <span className="arrow">▼</span></button>
            </div>
          </div>
        </div>
        <div />
      </section>
      {/* <div class="newsletter-section">
        <div class="container">
    <div class="section_sub_heading"><span>Newsletter</span></div>
    <div class="section_heading">To get weekly & monthly <br />news,Subscribe to our newsletter</div>
    <form class="newsletter_form">
      <input type="email" placeholder="Your email address" />
      <input type="submit" value="Subscribe" />
    </form>
        </div>
      </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/print gallery_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function GalleryVideoContent() {
  useEffect(() => {
    const toEmbedUrl = (url) => {
      if (!url) return '';
      if (url.includes('youtube.com/embed/')) return url;
      const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}?rel=0`;
      }
      return url;
    };

    const load = async () => {
      try {
        const response = await fetch(apiUrl('/api/videos'));
        const data = response.ok ? await response.json() : null;
        const items = Array.isArray(data?.items) ? data.items : [];
        if (!items.length) return;
        const grid = document.querySelector('.video_grid');
        if (!grid) return;
        grid.innerHTML = '';
        const fragment = document.createDocumentFragment();
        items.forEach((item) => {
          const box = document.createElement('div');
          box.className = 'video_box';
          const iframe = document.createElement('iframe');
          iframe.width = '100%';
          iframe.height = '300';
          iframe.src = toEmbedUrl(item.url);
          iframe.allowFullscreen = true;
          box.appendChild(iframe);
          fragment.appendChild(box);
        });
        grid.appendChild(fragment);
      } catch {
        // Keep static videos if API isn't available.
      }
    };

    load();
  }, []);

  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/videoGallery.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/gallery video_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/videoGallery.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/videoGallery.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="about_us_gallery">
        <div className="container">
          <div className="gallery_text">
            <img src="/assets/gallery video_files/om_icon.png" />Gallery<img src="/assets/gallery video_files/om_icon.png" />
          </div>
          <div className="heading">Explore our video gallery to know how we works</div>
          <div className="video_grid">
            <div className="video_box" style={{}}>
              <iframe height={300} src="https://www.youtube.com/embed/Qf2I-4Lldco?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{}}>
              <iframe height={300} src="https://www.youtube.com/embed/mWmIyWQVEBQ?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{}}>
              <iframe height={300} src="https://www.youtube.com/embed/MjQKo2TaJUE?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{}}>
              <iframe height={300} src="https://www.youtube.com/embed/BYTL39lRBaI?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{}}>
              <iframe height={300} src="https://www.youtube.com/embed/ku13MUMyW3M?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{}}>
              <iframe height={300} src="https://www.youtube.com/embed/fbv35ZVyIaE?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{display: 'none'}}>
              <iframe height={300} src="https://www.youtube.com/embed/UTAJoqA4vX4?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{display: 'none'}}>
              <iframe height={300} src="https://www.youtube.com/embed/395Rz4uavJo?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{display: 'none'}}>
              <iframe height={300} src="https://www.youtube.com/embed/_Snrt_2c2BQ?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{display: 'none'}}>
              <iframe height={300} src="https://www.youtube.com/embed/x0zZy2nj0Rk?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{display: 'none'}}>
              <iframe height={300} src="https://www.youtube.com/embed/cihzB7UHUvw?rel=0" width="100%" />
            </div>
            <div className="video_box" style={{display: 'none'}}>
              <iframe height={300} src="https://www.youtube.com/embed/qR51rE2-aP0?rel=0" width="100%" />
            </div>
          </div>
          <div className="wrapper">
            <div className="see_more_btn">See More</div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>News letter</span></div>
          <div class="section_heading">To get weekly &amp; monthly <br />news, Subscribe to our newsletter</div>
          <form class="newsletter_form">
              <input type="email" placeholder="Your email address" />
              <input type="submit" value="Subscribe" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/gallery video_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function OurTeamContent() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanchcom</a></div>
                <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/our team main_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/teamMember.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">Our Team</h1>
          </div>
        </div>
      </div>
      <div className="card-container" id="cardContainer">
        {/* Always visible cards */}
        <div className="card">
          <img alt="Card Image 1" src="/assets/our team main_files/team1.png" />
          <h3>श्री श्री 1008 पूज्य परमहंस स्वामी सांदीपेंद्र जी महाराज</h3>
          <div className="line" />
          <p className="description">अध्यक्ष, रामायण रिसर्च काउंसिल <br />
            माता बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</p>
        </div>
        <div className="card">
          <img alt="Card Image 2" src="/assets/our team main_files/team2.png" />
          <h3>पूज्य महामण्डलेश्वर आचार्य श्री स्वामी चित्प्रकाशानन्द गिरि जी महाराज</h3>
          <div className="line" />
          <p className="description">संयोजक, रामायण रिसर्च काउंसिल <br />
            परमधाम आश्रम, वृंदावन</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/our team main_files/team3.png" />
          <h3>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज </h3> <br />
          <div className="line" />
          <p className="description">उपाध्यक्ष, रामायण रिसर्च काउंसिल 
            महंत,<br /> उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उत्तर प्रदेश</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/our team main_files/team4.png" />
          <h3>श्री अजय भट्ट जी</h3>
          <div className="line" />
          <p className="description">अध्यक्ष, बोर्ड ऑफ ट्रस्टी, रामायण रि. का.
            <br />
            पूर्व केंद्रीय मंत्री एवं सांसद, उत्तराखण्ड</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/our team main_files/team5.jpg" />
          <h3>श्री अश्विनी चौबे जी</h3>
          <div className="line" />
          <p className="description">मुख्य संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            पूर्व केंद्रीय राज्य मंत्री</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/our team main_files/team6.jpg" />
          <h3>डॉ. साध्वी अपराजितानंद गिरी</h3>
          <div className="line" />
          <p className="description">सदस्य,<br /> रामायण रिसर्च काउंसिल
            <br />
            निरंजनी अखाड़ा</p>
        </div>
        {/* Hidden cards */}
        <div className="card hidden">
          <img alt="Card Image 4" src="/assets/our team main_files/team7.png" />
          <h3>श्री देव रत्न शर्मा जी</h3>
          <div className="line" />
          <p className="description">वरिष्ठ सदस्य, रामायण रिसर्च काउंसिल
            <br />
            पूर्व ओएसडी, मध्य प्रदेश सरकार</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 5" src="/assets/our team main_files/team8.png" />
          <h3>श्री देव दत्त शर्मा जी</h3>
          <div className="line" />
          <p className="description">वरिष्ठ   सदस्य, रामायण रिसर्च काउंसिल
            <br />
            सेवानिवृत्त आईएएस</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team11.png" />
          <h3>श्री कुमार सुशांत जी</h3>
          <div className="line" />
          <p className="description">महासचिव, रामायण रिसर्च काउंसिल
            <br />
            लेखक एवं पूर्व सलाहकार, भारत सरकार</p>
        </div>
        {/* <div class="card hidden">
    <img src="../OurTeam images/team member/team12.png" alt="Card Image 6" />
    <h3>पूज्य साध्वी लक्ष्मी माता जी</h3>
    <div class="line"></div>
    <p class="description">सदस्य, रामायण रिसर्च काउंसिल
    <br />
    श्रीरामकथावाचिका</p>
        </div> */}
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team13.png" />
          <h3>श्री रितेश अग्रवाल जी</h3>
          <div className="line" />
          <p className="description">प्रभारी, लीगल-सेल, रामायण रिसर्च काउंसिल
            <br />
            अधिवक्ता, सुप्रीम कोर्ट</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team14.png" />
          <h3>श्री केवल कपूर जी</h3>
          <div className="line" />
          <p className="description">अध्यक्ष, कॉरपोरेट अफेयर्स एवं प्रभारी, ग्रंथ (श्रीरामलला- मन से मंदिर तक)
            <br />
            मीडिया प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team15.png" />
          <h3>श्री पितांबर मिश्र जी
          </h3>
          <div className="line" />
          <p className="description">सचिव, रामायण रिसर्च काउंसिल
            <br />
            शोधार्थी</p>
        </div>
        <div className="card hidden">
          <img alt="vivek_sharma_ji" src="/assets/our team main_files/vivek_sharma_ji.png" />
          <h3>श्री विवेक शर्मा जी</h3>
          <div className="line" />
          <p className="description">विशेष सचिव, रामायण रिसर्च काउंसिल</p>
        </div>
        {/* <div class="card hidden">
    <img src="../OurTeam images/team member/team16.jpg" alt="Card Image 6" />
    <h3>डॉ. रविन्द्र कुमार जी</h3>
    <div class="line"></div>
    <p class="description">सदस्य, रामायण रिसर्च काउंसिल
      <br />समाजसेवी</p>
        </div> */}
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team17.png" />
          <h3>श्री रौशन सिंह जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            स्वयंसेवक, आरएसएस</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team23.png" />
          <h3>श्री कमल चिब जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/laxminarayan-bhala.jpg" />
          <h3>श्री लक्ष्मी नारायण भाला जी 'लक्खी दा'</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/Aditya-Jha.jpg" />
          <h3>श्री आदित्य झा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team44.png" />
          <h3>श्री रविकान्त गर्ग जी</h3>
          <div className="line" />
          <p className="description">वरिष्ठ उपाध्यक्ष, रामायण रिसर्च काउंसिल
            <br />
            पूर्व अध्यक्ष, उप्र व्यापार कल्याण बोर्ड,<br /> उप्र सरकार</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team46.png" />
          <h3>श्री जीके केडिया जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            निदेशक, G. K. Kedia &amp; Co.</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team20.png" />
          <h3>श्री राजीव कुमार सिंह जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            आईटी प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team24.png" />
          <h3>श्री प्रण शर्मा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            प्रेसिडेंट, श्री वैद्धनाथ आयुर्वेद भवन प्रा. लि.</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/amber-agrawal.jpg" />
          <h3>श्री अम्बर अग्रवाल जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/श्री-वेंकट-रेड्डी-यर्रम-जी.jpg" />
          <h3>श्श्री वेंकट रेड्डी यर्रम जी</h3>
          <div className="line" />
          <p className="description">समन्वयक, दक्षिण भारत</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/shivam-singh-ji.jpg" />
          <h3>श्री शिवम सिंह जी</h3>
          <div className="line" />
          <p className="description">आईटी हेड, रामायण रिसर्च काउंसिल<br />आईटी प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team25.png" />
          <h3>श्री अजय छंगाणी जी</h3>
          <div className="line" />
          <p className="description">Co-ordinator, कॉरपोरेट सेल, रामा. रिस. का.
            <br />
            आईटी प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team27.jpg" />
          <h3>श्री रुपेश रंजन जी</h3>
          <div className="line" />
          <p className="description">कोषाध्यक्ष, रामायण रिसर्च काउंसिल
            <br />
            सीए</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team29.png" />
          <h3>श्रीमती अर्चना सिंघल जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेविका</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team30.png" />
          <h3>श्रीमती अम्बिका शर्मा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team31.png" />
          <h3>श्रीमती पूनम झा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            अधिवक्ता, दिल्ली हाईकोर्ट</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team32.png" />
          <h3>श्री सोहन गिरी जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team33.png" />
          <h3>श्री राणा वैभव जी</h3>
          <div className="line" />
          <p className="description">समन्वयक, विश्वविद्यालय विभाग, RRC
            <br />
            शिक्षा क्षेत्र से जुड़े समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team34.png" />
          <h3>श्री शशांक सिंह जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team35.png" />
          <h3>श्री कुमार स्मृति</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            मीडिया प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team36.png" />
          <h3>श्री आनंद मोहन सिंह जी</h3>
          <div className="line" />
          <p className="description">सह-प्रभारी, आईटी-सेल, रामायण रिसर्च काउं.
            <br />
            आईटी प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team37.png" />
          <h3>श्री सुभाष झा जी</h3>
          <div className="line" />
          <p className="description">सह-प्रभारी, आईटी-सेल, रामायण रिसर्च काउंसिल<br />आईटी प्रोफेशनल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team38.png" />
          <h3>श्री रजनीश गुप्ता जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल<br />समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team39.png" />
          <h3>श्रीमती रितिका झा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/our team main_files/team40.png" />
          <h3>श्री विकास वर्मा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
      </div>
      <div className="see-more-wrapper">
        <button className="see-more">See More</button>
      </div>
      {/* footer  */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/our team main_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function OtherTeamContent() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/other team_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* banner  */}
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">टीम के सदस्य</h1>
          </div>
        </div>
      </div>
      {/* cards  */}
      <div className="card-container" id="cardContainer">
        {/* Always visible cards */}
        <div className="card">
          <img alt="Card Image 1" src="/assets/other team_files/img1.png" />
          <h3>श्री विनीत पाण्डेय जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            शोधार्थी, जवाहरलाल नेहरू विश्वविद्यालय</p>
        </div>
        <div className="card">
          <img alt="Card Image 2" src="/assets/other team_files/img2.png" />
          <h3>डॉ. अवधेश कुमार जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            सहयोगी समन्वयक, इग्नू, नई दिल्ली</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/other team_files/img3.png" />
          <h3>श्री आशुतोष तिवारी जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिन्दी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/other team_files/img4.png" />
          <h3>श्री निरंजन यादव जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/other team_files/img5.jpg" />
          <h3>आचार्य पंकज अथर्व जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            ज्योतिषाचार्य</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/other team_files/img6.png" />
          <h3>श्री मनीष साहू जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
        {/* Hidden cards */}
        <div className="card hidden">
          <img alt="Card Image 4" src="/assets/other team_files/img7.png" />
          <h3>सुश्री ज्योति जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 5" src="/assets/other team_files/img8.png" />
          <h3>श्री शिवांश मिश्र जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/other team_files/img9.png" />
          <h3>सुश्री आयुषी सिंह जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/other team_files/img10.png" />
          <h3>सुश्री खुशी सिंह जी</h3>
          <div className="line" />
          <p className="description">शोधार्थी, रामायण रिसर्च काउंसिल
            <br />
            हिंदी विभाग, दिल्ली विश्वविद्यालय</p>
        </div>
      </div>
      <div className="see-more-wrapper">
        <button className="see-more">See More</button>
      </div>
      {/* footer  */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/other team_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function SantMandalContent() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/sant mandal_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* banner  */}
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">टीम के सदस्य</h1>
          </div>
        </div>
      </div>
      {/* cards  */}
      <div className="card-container" id="cardContainer">
        {/* Always visible cards */}
        <div className="card">
          <img alt="Card Image 1" src="/assets/sant mandal_files/img1.png" />
          <h3>पूज्य श्री महंत स्वामी ज्ञानदेव <br /> सिंह जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            आचार्य महामंडलेश्वर, निर्मली अखाड़ा</p>
        </div>
        <div className="card">
          <img alt="Card Image 2" src="/assets/sant mandal_files/img2.jpg" />
          <h3>पूज्य महामण्डलेश्वर गीता मनीषी स्वामी श्री ज्ञानानंद जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            करनाल, हरियाणा.</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/sant mandal_files/img3.png" />
          <h3>पूज्य स्वामी शारदानन्द सरस्वती <br /> जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            विश्व मंगलम सेवा न्यास, वृंदावन (यूपी)</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/sant mandal_files/img4.png" />
          <h3>पूज्य महामंडलेश्वर श्री श्री १००८ श्री महंत विजयदास भैया जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/sant mandal_files/img5.png" />
          <h3>पूज्य महामण्डलेश्वर स्वामी श्री ईश्वर दास जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            श्रीकृष्णायन देशी गोरक्षा एवं गोलोक धाम सेवा समिति (हरिद्वार)</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/sant mandal_files/img6.png" />
          <h3>श्री महंत आचार्य संगीत कृष्ण <br />सांवरिया बाबा</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            अध्यक्ष, अखिल भारतीय चार संप्रदाय निर्मोहि अग्नि अखाड़ा (यवतमाल, महाराष्ट्र)</p>
        </div>
        {/* Hidden cards */}
        <div className="card hidden">
          <img alt="Card Image 4" src="/assets/sant mandal_files/img7.png" />
          <h3>जगतगुरु श्री वैदेहीवल्लभाचार्य <br /> जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            जगतगुरु श्री विजयरामरावलाचार्य द्वार पीठाधीश्वर</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 5" src="/assets/sant mandal_files/img8.png" />
          <h3>पूज्य श्रीजी रमण योगी <br /> जी महाराज</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, मध्य प्रदेश
            महालक्ष्मी उपासक</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sant mandal_files/img9.png" />
          <h3>श्री श्री 1008 रामचंद्राचार्य परमहंस पूज्य स्वामी आगमानंद जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            श्रीमहाशमशानी उग्रकालिका सिद्ध शक्तिपीठ, नगरह, भागलपुर (बिहार)</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sant mandal_files/img10.png" />
          <h3>महामंडलेश्वर महंत सच्चिदानंद दास शास्री जी महाराज</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल, वृंदावन
            <br />
            संस्थापक अध्यक्ष, श्री गोपाल जी मंदिर सेवा ट्रस्ट</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sant mandal_files/img11.png" /> <br />
          <h3>स्वामी जगन्नाथंद <br /> गिरी जी</h3>
          <div className="line" />
          <p className="description">संरक्षक, रामायण रिसर्च काउंसिल
            <br />
            सचिव, भारत सेवाश्रम संघ, भुवनेश्वर, ओड़िशा</p>
        </div>
      </div>
      <div className="see-more-wrapper">
        <button className="see-more">See More</button>
      </div>
      {/* footer  */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/sant mandal_files/logo(1).png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function SitaSamitiContent() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/sita samiti_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* banner  */}
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">टीम के सदस्य</h1>
          </div>
        </div>
      </div>
      {/* cards  */}
      <div className="card-container" id="cardContainer">
        {/* Always visible cards */}
        <div className="card">
          <img alt="Card Image 1" src="/assets/sita samiti_files/img1.png" />
          <h3>पूज्य गुरु मां चैतन्य मीरा</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति, रामायण रिसर्च काउंसिल
            आध्यात्मिक दार्शनिक</p>
        </div>
        <div className="card">
          <img alt="Card Image 2" src="/assets/sita samiti_files/img2.png" />
          <h3>श्रीमती अन्नपूर्णा देवी जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति, रामायण रिसर्च काउंसिल
            मा. कैबिनेट मंत्री, महिला एवं बाल विकास, भारत सरकार</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/sita samiti_files/img3.png" />
          <h3>श्रीमती रमा देवी जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल<br />
            मा. पूर्व सांसद, शिवहर, बिहार</p>
        </div>
        <div className="card">
          <img alt="Card Image 4" src="/assets/sita samiti_files/img4.png" />
          <h3>श्रीमती केशरी देवी पटेल जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल <br />
            मा. पूर्व सांसद, फूलपुर (प्रयागराज), उत्तर प्रदेश</p>
        </div>
        <div className="card">
          <img alt="Card Image 5" src="/assets/sita samiti_files/img5.png" />
          <h3>श्रीमती रीता बहुगुणा जोशी जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, प्रयागराज, उत्तर प्रदेश</p>
        </div>
        <div className="card">
          <img alt="Card Image 6" src="/assets/sita samiti_files/img6.png" />
          <h3>श्रीमती क्वीन ओझा जी
          </h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, गुआहाटी, असम</p>
        </div>
        {/* Hidden cards */}
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sita samiti_files/img7.png" />
          <h3>श्रीमती देबश्री चौधरी जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, रायगंज, पश्चिम बंगाल</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sita samiti_files/img8.png" />
          <h3>श्रीमती गीताबेन वी. राठवा जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल
            <br />
            मा. पूर्व सांसद, छोटा उदयपुर, गुजरात</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sita samiti_files/img9.png" />
          <h3>श्रीमती संध्या सुमन राय जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल
            <br />
            मा. सांसद, भिण्ड-दतिया, मध्य प्रदेश</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 6" src="/assets/sita samiti_files/img10.png" />
          <h3>पूज्य छोटी गुरु मां</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य,<br /> सीता सखी समिति,<br /> रामायण रिसर्च काउंसिल
            मोटिवेटर</p>
        </div>
      </div>
      <div className="see-more-wrapper">
        <button className="see-more">See More</button>
      </div>
      {/* footer  */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/sita samiti_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function StateTeamContent() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/state team_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/stateTeam.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* banner  */}
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">टीम के सदस्य</h1>
          </div>
        </div>
      </div>
      {/* cards  */}
      <div className="card-container" id="cardContainer">
        {/* Always visible cards */}
        <div className="card">
          <img alt="Card Image 1" src="/assets/state team_files/img1.jpg" />
          <h3>आ. श्री हार्दिक हुंडिया जी</h3>
          <div className="line" />
          <p className="description">समन्वयक, महाराष्ट्र, रामायण रिसर्च काउंसिल
            <br />
            वरिष्ठ पत्रकार</p>
        </div>
        <div className="card">
          <img alt="Card Image 2" src="/assets/state team_files/img2.jpg" />
          <h3>श्री बब्बन सिंह जी</h3>
          <div className="line" />
          <p className="description">प्रभारी, बिहार प्रदेश, रामायण रिसर्च <br />काउंसिल
            समाजसेवी</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/state team_files/img3.jpg" />
          <h3>आ. श्री ऋषिकेश सिंह जी</h3>
          <div className="line" />
          <p className="description">Tसह-प्रभारी, बिहार प्रदेश, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/state team_files/img4.png" />
          <h3>स्वामी दिव्यानंद जी महाराज</h3>
          <div className="line" />
          <p className="description">संयोजक, झारखंड, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/state team_files/img5.png" />
          <h3>आचार्य संतोष पाण्डेय जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, उत्तर प्रदेश
            <br />
            ज्योतिषाचार्य</p>
        </div>
        <div className="card">
          <img alt="Card Image 3" src="/assets/state team_files/img6.png" />
          <h3>श्री विनोद अग्रवाल जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, उत्तर प्रदेश
            <br />
            समाजसेवी, उत्तर प्रदेश</p>
        </div>
        {/* Hidden cards */}
        <div className="card hidden">
          <img alt="Card Image 4" src="/assets/state team_files/img7.png" />
          <h3>श्री उमानंद कौशिक जी</h3>
          <div className="line" />
          <p className="description">मुख्य कार्यकारिणी सदस्य, उत्तर प्रदेश
            <br />
            समाजसेवी</p>
        </div>
        <div className="card hidden">
          <img alt="Card Image 5" src="/assets/state team_files/img8.png" />
          <h3>श्री दिवाकर तिवारी जी</h3>
          <div className="line" />
          <p className="description">समन्वयक, उत्तर प्रदेश, रामायण रिसर्च काउंसिल
            <br />
            समाजसेवी</p>
        </div>
      </div>
      <div className="see-more-wrapper">
        <button className="see-more">See More</button>
      </div>
      {/* footer  */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/state team_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function AdvisorsContent() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="/"><img alt="Ramaynmanch" src="/assets/advisors_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://www.ramayanresearchcouncil.com/advisorteam.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                          {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण-मंच</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">महाकुंभ</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://www.ramayanresearchcouncil.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://www.ramayanresearchcouncil.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://www.ramayanresearchcouncil.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <div className="setion_banner">
            <h1 className="section_heading">Our Team</h1>
          </div>
        </div>
      </div>
      <div className="card-container" id="cardContainer">
        {/* Always visible cards */}
        {/* <div class="card">
    <img src="../OurTeam images/team member/team1.png" alt="Card Image 1" />
    <h3>श्री श्री 1008 पूज्य परमहंस स्वामी सांदीपेंद्र जी महाराज</h3>
    <div class="line"></div>
    <p class="description">अध्यक्ष, रामायण रिसर्च काउंसिल <br />
    माता बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</p>
        </div>
        <div class="card">
    <img src="../OurTeam images/team member/team2.png" alt="Card Image 2" />
    <h3>पूज्य महामण्डलेश्वर आचार्य श्री स्वामी चित्प्रकाशानन्द गिरि जी महाराज</h3>
    <div class="line"></div>
    <p class="description">संयोजक, रामायण रिसर्च काउंसिल <br />
    परमधाम आश्रम, वृंदावन</p>
        </div>
        <div class="card">
    <img src="../OurTeam images/team member/team3.png" alt="Card Image 3" />
    <h3>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज </h3> <br />
    <div class="line"></div>
    <p class="description">उपाध्यक्ष, रामायण रिसर्च काउंसिल 
    महंत,<br /> उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उत्तर प्रदेश</p>
        </div>
        <div class="card">
    <img src="../OurTeam images/team member/team4.png" alt="Card Image 3" />
    <h3>श्री अजय भट्ट जी</h3>
    <div class="line"></div>
    <p class="description">अध्यक्ष, बोर्ड ऑफ ट्रस्टी, रामायण रि. का.
    <br />
    पूर्व केंद्रीय मंत्री एवं सांसद, उत्तराखण्ड</p>
        </div>
        <div class="card">
    <img src="../OurTeam images/team member/team5.jpg" alt="Card Image 3" />
    <h3>श्री अश्विनी चौबे जी</h3>
    <div class="line"></div>
    <p class="description">संरक्षक एवं कार्यकारी अध्यक्ष, रामायण रिसर्च काउंसिल
    <br />
    पूर्व केंद्रीय राज्य मंत्री</p>
        </div>
        <div class="card">
    <img src="../OurTeam images/team member/team6.jpg" alt="Card Image 3" />
    <h3>डॉ. साध्वी अपराजितानंद गिरी</h3>
    <div class="line"></div>
    <p class="description">प्रभारी, संत संरक्षक मंडल,<br /> रामायण रिसर्च काउंसिल
    <br />
    निरंजनी अखाड़ा</p>
        </div> */}
        {/* Hidden cards */}
        {/* <div class="card hidden">
    <img src="../OurTeam images/team member/team7.png" alt="Card Image 4" />
    <h3>श्री देव रत्न शर्मा जी</h3>
    <div class="line"></div>
    <p class="description">प्रभारी, बौद्धिक प्रकोष्ठ, रामायण रिसर्च काउंसिल
    <br />
    पूर्व ओएसडी, मध्य प्रदेश सरकार</p>
        </div> */}
        <div className="card">
          <img alt="Card Image 6" src="/assets/advisors_files/team10.png" />
          <h3>श्री मनहर भाई जाला जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            पूर्व चेयरमैन, राष्ट्रीय सफाई कर्मचारी आयोग, भारत सरकार</p>
        </div>
        <div className="card">
          <img alt="Card Image 6" src="/assets/advisors_files/team18.png" />
          <h3>श्री चंद्रशेखर मिश्रा जी</h3>
          <div className="line" />
          <p className="description">कार्यालय प्रभारी, रामायण रिसर्च काउंसिल
            <br />
            पूर्व एडिशनल सेक्रेटरी, राज्य सभा</p>
        </div>
        <div className="card">
          <img alt="Card Image 6" src="/assets/advisors_files/team19.png" />
          <h3>श्री एनके झा जी</h3>
          <div className="line" />
          <p className="description">सदस्य, रामायण रिसर्च काउंसिल
            <br />
            पूर्व निदेशक, लोक सभा सचिवालय</p>
        </div>
        <div className="card">
          <img alt="Card Image 6" src="/assets/advisors_files/team21.jpg" />
          <h3>साध्वी प्रज्ञा भारती जी</h3>
          <div className="line" />
          <p className="description">हिन्दू स्कॉलर, संयोजक, सीता सखी समिति
            <br />
            समाजसेवी</p>
        </div>
      </div>
      <div className="see-more-wrapper">
        <button className="see-more" style={{display: 'none'}}>See More</button>
      </div>
      {/* footer  */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/advisors_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://www.ramayanresearchcouncil.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://www.ramayanresearchcouncil.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function LetterToModiContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://alettertonarendramodi.com/#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://alettertonarendramodi.com/about-us.html">अ लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://alettertonarendramodi.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://alettertonarendramodi.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        {/* <li><a href="about-us.html">Our Objectives</a></li> */}
                      </ul>
                    </li>
                    <li><a href="https://alettertonarendramodi.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://alettertonarendramodi.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://alettertonarendramodi.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://alettertonarendramodi.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://alettertonarendramodi.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://alettertonarendramodi.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://alettertonarendramodi.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://alettertonarendramodi.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://alettertonarendramodi.com/index.html"><img alt="Ramaynmanch" src="/assets/letter to modi_files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://alettertonarendramodi.com/#">मीडिया</a>
                      <ul>
                        <li><a href="https://alettertonarendramodi.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://alettertonarendramodi.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://alettertonarendramodi.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://alettertonarendramodi.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://alettertonarendramodi.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://alettertonarendramodi.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://alettertonarendramodi.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://alettertonarendramodi.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://alettertonarendramodi.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://alettertonarendramodi.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li> */}
                        {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://alettertonarendramodi.com/#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://alettertonarendramodi.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://alettertonarendramodi.com/about-us.html">अ लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://alettertonarendramodi.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://alettertonarendramodi.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://alettertonarendramodi.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://alettertonarendramodi.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://alettertonarendramodi.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://alettertonarendramodi.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://alettertonarendramodi.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://alettertonarendramodi.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://alettertonarendramodi.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://alettertonarendramodi.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <a href="https://alettertonarendramodi.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://alettertonarendramodi.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://alettertonarendramodi.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://alettertonarendramodi.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://alettertonarendramodi.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://alettertonarendramodi.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://alettertonarendramodi.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://alettertonarendramodi.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://alettertonarendramodi.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://alettertonarendramodi.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://alettertonarendramodi.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li> */}
                          {/* <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner_area">
        <div className="container">
          <ul className="banner_slider slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12060, transform: 'translate3d(-5360px, 0px, 0px)'}}><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-4.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={0} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/Slider-1.jpg" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={1} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-1.png" />
                </li><li aria-hidden="true" className="slick-slide" data-slick-index={2} style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-2.png" />
                </li><li aria-hidden="false" className="slick-slide slick-current slick-active" data-slick-index={3} style={{width: 1340}} tabIndex={0}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-4.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={4} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/Slider-1.jpg" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={5} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-1.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={6} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-2.png" />
                </li><li aria-hidden="true" className="slick-slide slick-cloned" data-slick-index={7} id="" style={{width: 1340}} tabIndex={-1}>
                  <img alt="image1" src="/assets/letter to modi_files/ALTNM-SLIDER-4.png" />
                </li></div></div>
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button></ul>
        </div>
      </div>
      <section className="iu-section">
        <div className="iu-container">
          <h1 className="section-heading">‘अ लेटर टू नरेंद्र मोदी’</h1>
          <p className="iu-text">
            सैकड़ों वर्षों का संघर्ष, सत्य-पथ पर श्रीराम-नाम रूपी आंदोलन की आग को जलाए रखने की वीरता और हमारे सनातन के संयम का फल है कि 22 जनवरी 2024 को श्रीरामलला की जन्मभूमि अयोध्या में हमारे आराध्य प्रभु श्रीरामलला की प्राण-प्रतिष्ठा को हम अपनी आंखों के सामने होते देख पाए। यह मंदिर इसलिए महत्त्वपूर्ण है क्योंकि यह करोड़ों सनातनियों की आस्था का केंद्र है, इसलिए तो लाखों राम-भक्तों ने संघर्ष के क्रम में अपने प्राणों की आहुति दे दी।               </p>
          <div className="iu-handle">अ लेटर टू नरेंद्र मोदी</div>
          <p className="iu-text">
            500 वर्षों के मंदिर संघर्ष में कितने कालखण्ड आए, विदेशी आक्रांता आए, अंग्रेज़ी शासन आए, स्वतंत्रता के बाद कई सरकारें आईं, कई प्रधानमंत्रियों के शासनकाल आए, लेकिन अंततः जिस प्रधानमंत्रित्व-काल में यह विषय साकार रूप में प्रतीत हुआ, वह श्रीमान नरेंद्र मोदी जी की वर्तमान सरकार है।
            इसलिए देश की संस्कृति और प्रभु श्रीराम के आदर्शों पर कार्य कर रही संस्था ‘रामायण रिसर्च काउंसिल’ आ. नरेंद्र मोदी जी के प्रति आभार और हृदय से धन्यवाद ज्ञापित करती है।
          </p>
          <a className="iu-link" href="https://alettertonarendramodi.com/about-us.html">और पढ़ें →</a>
        </div>
        <div className="section-heading">काउंसिल के प्रमुख प्रकल्प</div>
      </section>
      <div className="body-container">
        <div className="about_us_section">
          <div className="container">
            <div className="devotional_items">
              <ul>
                <li>
                  <img alt="image" src="/assets/letter to modi_files/book_icon.png" />
                  <h3>मां सीता</h3>
                  <p>मां सीताजी के प्राकट्य क्षेत्र सीतामढ़ी (बिहार) को तीर्थ क्षेत्र के रूप में विकसित करने के लिए काउंसिल की पहल। काउंसिल के प्रयत्नों को देखते हुए बिहार राज्य धार्मिक न्यास पर्षद ने हाल में सीतामढ़ी में राघोपुर बखरी स्थित 833 वर्ष पुराने श्रीराम-जानकी स्थान पर काउंसिल को 12 एकड़ भूमि आवंटित की है। काउंसिल ने इस मंदिर के जीर्णोद्धार के साथ यहां की भूमि पर 51 शक्तिपीठों से मिट्टी एवं ज्योत लाकर शक्ति-स्वरूप में एक मंदिर को स्थापित करने का संकल्प लिया है।</p>
                  <a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/letter to modi_files/bow_icon.png" />
                  <h3>पुस्तक ग्रंथ</h3>
                  <p>अयोध्या में लगभग 500 वर्षों के संघर्ष पर आधारित ग्रंथ ‘श्रीरामलला- मन से मंदिर तक’ हिन्दी भाषा में तैयार है। ग्रंथ 1250 पृष्ठों का है तथा हिन्दी के अलावा 10 अन्य अंतरराष्ट्रीय भाषाओं में तैयार किया जा रहा है। मा. प्रधानमंत्री जी का विशेष आभार जिन्होंने ग्रंथ-लेखन के दौरान काउंसिल के महासचिव श्री कुमार सुशांत को समय देकर ग्रंथ के पूरे विषय को समझा। ग्रंथ को 21 देशों में विमोचन करने का संकल्प है तथा संयुक्त राष्ट्र के सभी देशों में डिजिटल रूप से प्रसार का संकल्प है।</p>
                  <a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
                <li>
                  <img alt="image" src="/assets/letter to modi_files/temple_icon.png" />
                  <h3>रामायण वार्ता</h3>
                  <p>हम देवभाषा संस्कृत भाषा का अधिक से अधिक प्रचार-प्रसार करना चाहते हैं। इसलिए हम संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ का प्रकाशन करते हैं। हम संस्कृत के प्रशिक्षण पर भी कार्य करते हैं। हमने संस्कृत भाषा के प्रति आमजन में जागरूकता हेतु 60 दिनों का एक कोर्स ‘देवभाषा संस्कृत सीखें’ डिवेलप किया गया है। इसे टेक्स्ट और डिजिटल दोनों प्रारूप में तैयार किया गया है जिसके माध्यम से शिक्षण एवं प्रशिक्षण हेतु संस्कृत के प्रसार के लिए कार्यशाला भी आयोजित करते हैं।</p>
                  <a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">और पढ़ें</a>
                </li>
              </ul>
            </div>
            <div className="about_us_info_section">
              <div className="two_equal_col">
                <div className="related_gallery">
                  <img alt="pic" src="/assets/letter to modi_files/imageupper (1).jpg" />
                  <img alt="pic" src="/assets/letter to modi_files/RRC-LOGO.png" />
                  <img alt="pic" src="/assets/letter to modi_files/MAA-SITA.png" />
                </div>
              </div>
              <div className="two_equal_col">
                <div className="sub_title"><img alt="om" src="/assets/letter to modi_files/om_icon.png" /> संकल्प</div>
                <div className="heading">सांस्कृतिक संवर्धन हेतु काउंसिल के प्रयास को जानिएः</div>
                <ul className="topics">
                  <li>
                    <span>काउंसिल के विषय में जानिएः</span>
                    <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। संस्था आयकर विभाग अंतर्गत 12A एवं 80G संबद्ध है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।
                      काउंसिल का मानना है कि प्रभु श्रीराम और श्रीभगवती सीताजी का जीवन एक आदर्श प्रेरणा-स्रोत है जिनका अनुसरण कर तथा पदचिन्हों पर चलकर हम अपने जीवन को सफल, सार्थक और अनुशासित बना सकते हैं।
                    </p>
                  </li>
                  <li>
                    <span>काउंसिल के उद्देश्यः</span>
                    <p>काउंसिल का उद्देश्य है, हमारे समाज को सुसंस्कृत एवं संस्कारित बनाना। 
                      हम विशेषकर छोटे बच्चों में अनुशासन, संस्कार एवं संस्कृति की जानकारी देना चाहते हैं। 
                      इसलिए काउंसिल के प्रकल्प ‘रामायण मंच’ के बैनर तले छोटे बच्चों में संस्कार प्रदान करने पर कार्य कर रहे हैं। 
                      काउंसिल अपने उद्देश्य में सफल भी रही है। काउंसिल की सफलता का ही परिणाम है कि आज ‘रामायण मंच’ पर एंकरिंग करने वाले वेदांत ठाकुर जी बाल कथा व्यास हैं और जो वैदेहीनंदन पंडित वेदांत जी महाराज (11 वर्षीय बाल व्यास) के नाम से प्रचलित हैं। 
                      आपको बता दें कि बाल व्यासजी ने  बालमन को सांस्कृतिक विचारों से जोड़ने वाले पद्य ‘वेदांत पुष्प’ को तैयार किया है</p>
                  </li>
                </ul>
                {/* <div class="tag_line"><span></span>‘Ramayana Research Council’ is a registered organization in
                          the form of ‘trust’ with a purpose to promote the cultural values of our country</div> */}
                <a href="https://alettertonarendramodi.com/#">
                  <div className="learn_more_btn">और जानने के लिए...</div></a>
                {/* <div class="learn_more_btn">LEARN MORE</div> */}
              </div>
            </div>
            <div>
              <div className="video_heading">
                <h4>काउंसिल की पहल पर आधारित कुछ डोक्यूमेंट्रीज को देखिएः</h4>
              </div>
              <div className="about_us_video_section">
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/CO-eW0L2oVE?rel=0" /></div>
                <div className="two_equal_col"><iframe src="https://www.youtube.com/embed/xtKVfHjGEqc?rel=0" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="guidance_section">
          <div className="container slick-initialized slick-slider slick-dotted"><button aria-label="Previous" className="slick-prev slick-arrow" style={{}} type="button">Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 6700, transform: 'translate3d(-2680px, 0px, 0px)'}}><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/letter to modi_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/letter to modi_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control10" aria-hidden="true" className="guidance_section_slider slick-slide" data-slick-index={0} id="slick-slide10" role="tabpanel" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/letter to modi_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/letter to modi_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-describedby="slick-slide-control11" aria-hidden="false" className="guidance_section_slider slick-slide slick-current slick-active" data-slick-index={1} id="slick-slide11" role="tabpanel" style={{width: 1340}} tabIndex={0}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/letter to modi_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/letter to modi_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={2} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/letter to modi_files/om_icon.png" />साहित्यिक-सृजन हेतु काउंसिल के कार्य</div>
                    <div className="heading">पुस्तक ‘सनातन संग भारत’</div>
                    <div className="tag_line"><span />सनातन विचार को प्रसार करने वाली पुस्तक ‘सनातन संग भारत’, जिसका विमोचन बागेश्वर सरकार आचार्य धीरेंद्र कृष्ण शास्त्री जी की उपस्थिति में पद्मविभूषण जगदगुरु पूज्य स्वामी श्रीरामभद्राचार्य जी महाराज, पटना (बिहार) के गांधी मैदान में 06 जुलाई 2025 को ‘सनातन महाकुंभ’ आयोजन में कर चुके हैं। इस पुस्तक को रामायण रिसर्च काउंसिल ने प्रस्तुत किया है।</div>
                    <p>पुस्तक के लेखक काउंसिल के महासचिव श्री कुमार सुशांत जी और पूर्व केंद्रीय मंत्री श्री अश्विनी कुमार चौबे जी हैं। इसके अलावा पुस्तक के संपादकीय सहयोगी में 14 सदस्यों का नाम शामिल है। इस पुस्तक में सनातन से संबंधित हर एक महत्त्वपूर्ण पहलू को शामिल करने का प्रयत्न किया गया है। पुस्तक में उत्तर प्रदेश के मा. मुख्यमंत्री श्री योगी आदित्यनाथ जी का भी आशीर्वचन प्राप्त हुआ है। कई संतों के विचार एवं भावों के साथ विभिन्न क्षेत्रों में कार्य कर रहे गणमान्यों के मंतव्यों को भी स्थान दिया गया है। पुस्तक को प्रभात प्रकाशन ने प्रकाशित किया है। काउंसिल का संकल्प है कि हम इस पुस्तक को कई भाषाओं में अनुवाद कर विश्व-स्तर पर ले जाएं और अपने सनातन परिवार को अपने सनातन के प्रति जागरूक करें।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="our mentor" src="/assets/letter to modi_files/sanatan-sang-bharat-3.jpg" />
                        {/* <p>महामंडलेश्वर श्री श्री १००८ पूज्यश्री महंत विजयदास भैया जी महाराज</p>
                              <span>आश्रम आनन्दधाम (वल्लभगढ़, हरियाणा)</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor6.png" alt="pic" />
                               <p>पूज्य श्री महंत स्वामी ज्ञानदेव सिंह जी महाराज</p>
                              <span>आचार्य महामंडलेश्वर, निर्मली अखाड़ा</span>
                          </li> */}
                    </ul>
                  </li>
                </ul><ul aria-hidden="true" className="guidance_section_slider slick-slide slick-cloned" data-slick-index={3} id="" style={{width: 1340}} tabIndex={-1}>
                  <li className="two-col-left">
                    <div className="sub_title"><img alt="om" src="/assets/letter to modi_files/om_icon.png" />बच्चों को प्रेरणा देने योग्य 'पद्य'</div>
                    <div className="heading">11 वर्षीय बाल-व्यासजी ने लिखा ‘वेदांत पुष्प’</div>
                    <div className="tag_line"><span />वैदेहीनंदन पंडित वेदांत जी महाराज केवल 11 वर्ष के हैं और आप वर्ष 2022 से काउंसिल के प्रकल्प रामायण मंच के लिए एंकरिंग करते रहे हैं।</div>
                    <p>आपने ‘रामायण रिसर्च काउंसिल’ के लिए ‘वेदांत पुष्प’ कविता-संग्रह की रचना की। इस कविता-संग्रह में अवध, व्रज, मैथिली और हिन्दी कविताओं का संग्रह है, जो दर्शाता है कि वेदांत का भारत की कई क्षेत्रीय भाषाओं में विशेष अभिरुचि है।
                      यह हमारे सनातन की सुंदरता है कि उसकी राह पर चलने वालों में स्वतः सुगंध आ जाती है और हर व्यक्ति उस सुगंध के प्रति आकर्षित होता चला जाता है। हमारे सनातन ने इस प्रकृति में कई ऐसी प्रतिभाओं को जन्म दिया है जिन्हें इतिहास कभी भूल नहीं सकती। भारतीय संस्कृति में कई ऐसे नाम हैं। कई बालकों में जन्म से ही विलक्षण प्रतिभा भी होती है, जो हमारे समाज को मार्गदर्शन प्रदान करती है। यहां यह उदाहरण इसलिए आवश्यक है क्योंकि मुझे बाल व्यास वेदांत जी इस अल्पायु से ही सनातन के प्रति चिंतन कर रहे हैं। अपनी पढ़ाई के साथ कई विषयों पर उनका अपना अध्ययन है। श्रीरामचरितमानस पर वह विशेष रूप से श्रीरामकथा करते हैं।</p>
                  </li>
                  <li className="two-col-right">
                    <ul className="mentor_item single-mentor">
                      <li>
                        <img alt="pic" src="/assets/letter to modi_files/vedant-pushp-pic-for-website.jpg" />
                        {/* <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी सांदीपेंद्र जी महाराज</p>
                              <span>मां बगलामुखी मंदिर प्रांगण, नलखेड़ा, मप्र</span> */}
                      </li>
                      {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor2.png" alt="pic" />
                              <p>श्री श्री 1008 महामंडलेश्वर पूज्य स्वामी चित्प्रकाशानंद गिरि जी महाराज</p>
                              <span>शक्ति साधना धाम, वृंदावन, उप्र</span>
                          </li> */}
                    </ul>
                  </li>
                </ul></div></div>
            {/* <ul class="guidance_section_slider">
                  <li class="two-col-left">
                      <div class="sub_title"><img src="https://www.ramayanresearchcouncil.com/images/om_icon.png" alt="om" /> Guidance</div>
                      <div class="heading">Our Mentors</div>
                      <div class="tag_line"><span></span>Saints are our far-sighted visionaries. The person or organization that works on the orders and instructions of saints never faces any kind of problem.</div>
                      <p>The Ramayana Research Council has been working to fulfil its objectives with the consultation and advice of renowned saints. There are many such saints but it's not possible to mention the names of all of them but mentioning few names here.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi voluptates soluta eligendi perferendis ducimus minus repellat voluptatum, laboriosam sed dolore fugit veniam exercitationem at mollitia? Dolore debitis perspiciatis libero.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi est esse dolorem architecto, ipsa praesentium eos corporis, aperiam, exercitationem distinctio quia. Deleniti dicta placeat minima molestias dolorum, excepturi voluptate exercitationem!   
                      </p>
                  </li>
                  <li class="two-col-right">
                      <ul class="mentor_item single-mentor">
                          <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/safeimagekit-For Backdrop.jpg" alt="pic" /> */}
            {/* <p>पूज्य महंत डॉ. स्वामी भरत दास जी महाराज</p>
                              <span>महंत, उदासीन संगत ऋषि आश्रम, अयोध्या (रानोपाली), उप्र</span> */}
            {/* </li> */}
            {/* <li>
                              <img src="https://www.ramayanresearchcouncil.com/images/mentor4.png" alt="pic" />
                              <p>महामण्डलेश्वर गीता मनीषी पूज्य स्वामी श्री ज्ञानानंद जी महाराज</p>
                              <span>करनाल, हरियाणा</span>
                          </li> */}
            {/* </ul> */}
            <button aria-label="Next" className="slick-next slick-arrow" style={{}} type="button">Next</button><ul className="slick-dots" role="tablist" style={{}}><li className="" role="presentation"><button aria-controls="slick-slide10" aria-label="1 of 2" id="slick-slide-control10" role="tab" tabIndex={-1} type="button">1</button></li><li className="slick-active" role="presentation"><button aria-controls="slick-slide11" aria-label="2 of 2" aria-selected="true" id="slick-slide-control11" role="tab" tabIndex={0} type="button">2</button></li></ul></div>
        </div>
        <div className="video_section_container">
          <h2 style={{color: 'red'}}>'रामायण मंच'</h2>
          <h4>छोटे बच्चों में संस्कार एवं अनुशासन हेतु 'रामायण मंच</h4>
          {/* First video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/sABffeDT59A?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/6qbBdCg79KU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/Ny-l2gaLd9E?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/JApfA8VEtF4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/q_oSfYzVEjU?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/LpcWt_bLsuE?rel=0" />
            </div>
          </div>
          {/* Second video row */}
          <div className="responsive_video_grid">
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/mXj5lU56tNk?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/ZeDMxRfjaB4?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/yyX9gdxUgj0?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/vbkF6BPygEM?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/xVlZNbHvQZA?rel=0" />
            </div>
            <div className="video_card">
              <iframe allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/BPcOe0qVi94?rel=0" />
            </div>
          </div>
        </div>
        <div className="user_feedback">
          <div className="container">
            <div className="section_heading">आध्यात्मिक विषयों से जुड़ा आलेख आप यहां पढ़ सकते हैं। अगर आप भी इस प्लेटफॉर्म पर यहां अपने विचार या आलेख लिखना चाहते हैं तो हमें अपने आलेख <a href="mailto:ramayanresearchcouncil@gmail.com">ramayanresearchcouncil@gmail.com</a> पर भेंजे</div>
          </div>
        </div>
        {/* <div class="our_article_section">
          <div class="container">
              <div class="section_sub_heading"><span>विचार</span></div>
              <div class="section_heading">आलेख</div>
              <div class="article_wrapper">
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/dugra_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">January 1, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">श्री सीता चालीसा</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/janki_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 28, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">माता जानकी तुमसे क्या मांगे</div>
                  </div>
                  <div class="article-items">
                      <img src="https://www.ramayanresearchcouncil.com/images/sitaMa_pic.png" alt="pic" />
                      <div class="by_line">
                          <div class="date">May 29, 2025</div>
                          <div class="author"></div>
                      </div>
                      <div class="title">लंका दहन के बाद सीता माता के हनुमान से प्रश्न</div>
                  </div>
              </div>
          </div>
      </div> */}
        <div className="testimonials_section">
          <div className="container">
            <div className="section_sub_heading"><span>आभार</span></div>
            <div className="section_heading">महानुभावों के विचार</div>
            <div className="testimonials_wrapper slick-initialized slick-slider"><button aria-label="Previous" className="slick-prev slick-arrow" style={{display: 'inline-block'}} type="button">Previous</button>
              <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 12900, transform: 'translate3d(-4515px, 0px, 0px)'}}><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-2} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={-1} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={0} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={1} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={2} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={3} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={4} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-current slick-active" data-slick-index={5} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="false" className="testimonials_items slick-slide slick-active" data-slick-index={6} style={{width: 615}} tabIndex={0}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={7} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide" data-slick-index={8} style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={9} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Governor_Arif_Mohammad_Khan (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर बहुत प्रसन्नता है कि रामायण रिसर्च काउंसिल ने 
                        श्री राम जन्मभूमि पर राम मंदिर के
                        निर्माण के लिये चले लम्बे संघर्ष पर गहन शोध किया है 
                        और इस इतिहास को पुस्तक रूप देने का निर्णय किया है।
                      </p>
                      <div className="monk_details">
                        ARIF MOHAMMED KHAN
                        <span>GOVERNOR OF KERALA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={10} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Manohar_Lal_Khattar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे यह जानकर हर्ष हुआ कि ‘रामायण रिसर्च काउंसिल’ द्वारा अयोध्या में निर्माणाधीन प्रभु श्रीराम मंदिर के लिए राम भक्तों द्वारा किए गए लंबे संघर्ष के गहन शोध पर आधारित पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ का हिन्दी एवं संस्कृत के अलावा अन्य 10 अंतर्राष्ट्रीय भाषाओं में प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मनोहर लाल
                        <span>मुख्यमंत्री, हरियाणा, चण्डीगढ़</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={11} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Narendra_Tomar (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>यह जानकर सन्तोष हुआ है कि ‘रामायण रिसर्च काउंसिल’ प्रभु श्रीराम मंदिर संघर्ष के ऊपर गहन शोध के उपरान्त 1108 पृष्ठों की पुस्तक ‘श्रीरामलला–मन से मंदिर तक’ को जनमानस में लाने की तैयारी में जुटी है।</p>
                      <div className="monk_details">
                        नरेंद्र सिंह तोमर
                        <span>कृषि एवं किसान कल्याण मंत्री, भारत सरकार</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={12} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/bhupendra_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>“पूनी पूनी कितनी हो सुनी सुनाई, मन की प्यास बुझे न बुझाई”
                        प्रभु राम की कथा ही कुछ न्यारी और अनन्य है।
                        “श्री रामलला – मन से मंदिर तक” ग्रंथ के यशस्वी अनावरण के लिये मेरी शुभकामना।
                      </p>
                      <div className="monk_details">
                        भूपेन्द्र पटेल
                        <span>मुख्यमंत्री, गुजरात राज्य</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={13} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/manbhai_patel (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>हर्ष का विषय है कि रामायण रिसर्च काउंसिल अयोध्या द्वारा प्रभु श्रीराम मंदिर निर्माण पर गहन शोध आधारित और 
                        सबसे अधिक 1,108 पृष्ठों वाली पुस्तक "श्रीरामलला - मन से मंदिर तक" का प्रकाशन किया जा रहा है।</p>
                      <div className="monk_details">
                        मंगुभाई पटेल
                        <span>राज्यपाल, मध्यप्रदेश</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={14} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Acharya_Devvrat (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>रामायण रिसर्च काउंसिल के तत्वावधान में श्रीराम मंदिर - अयोध्या सम्बन्धी पर गहन 
                        शोध एवं विभिन्न विषयों को समावेश करनेवाली पुस्तक "श्रीरामलला - 
                        मन से मंदिर तक" का प्रकाशन किया जा रहा है, 
                        यह जानकर अति प्रसन्नता हुई।</p>
                      <div className="monk_details">
                        Acharya Devvrat
                        <span>Governor, Gujarat</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={15} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Brig.B.D.Mishra.jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>सुदीर्घ संघर्ष के सुखद सफलता से श्री रामलला के भव्य मंदिर के निर्माण का कार्य प्रारंभ होने पर समस्त जन मानस प्रसन्नता से भाव-विभोर है। 
                        आज अनगिनत श्रीराम अनुयायियों के सदियों का स्वप्न साकार हो रहा है।</p>
                      <div className="monk_details">
                        Brig. (Dr.) B. D. Mishra (Retd.)
                        <span>Governor, Arunachal Pradesh</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={16} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/ram-ji (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>मुझे अत्यंत हर्ष की अनुभूति हो रही है तथा श्रीराम सीटों समिति के मुख्यकार्यकारिणी सदस्य के रूप में शामिल होने की आग्रही हूँ।
                        मैं इस पवित्र कार्य हेतु प्रारंभ श्रीराम सीटों समिति के मुख्य कार्यकारिणी में शामिल होने की सहमति प्रदान करती हूँ।</p>
                      <div className="monk_details">
                        Gitaben V. Rathava
                        <span>MEMBER OF PARLIAMENT, LOK SABHA</span>
                      </div>
                    </div>
                  </div><div aria-hidden="true" className="testimonials_items slick-slide slick-cloned" data-slick-index={17} id="" style={{width: 615}} tabIndex={-1}>
                    <figure>
                      <img alt="pic" src="/assets/letter to modi_files/Prof_Ganeshi_Laal (1).jpg" />
                    </figure>
                    <div className="testimonials_text">
                      <p>आपके शुभकामनाओं के लिए मैं आभारी हूँ। इस भयंकर कोरोना महामारी के दौरान समाज में सकारात्मकता लाने और 
                        मर्यादा पुरुषोत्तम भगवान श्रीराम के गुणगान हेतु रामायण अनुसंधान परिषद्, 
                        अयोध्या द्वारा किये गए महान कार्यों से अवगत कराते हुए जो ग्रंथ आपने भेजा है, 
                        उसे पढ़कर मुझे बहुत खुशी हो रही है। रामायण अनुसंधान परिषद् का आगामी प्रकाशन
                        "श्रीरामलला – मन से मंदिर तक" एक पवित्र और सार्थक कार्य है।</p>
                      <div className="monk_details">
                        Prof. Ganeshi Lal
                        <span>Governor, Odisha</span>
                      </div>
                    </div>
                  </div></div></div>
              <button aria-label="Next" className="slick-next slick-arrow" style={{display: 'inline-block'}} type="button">Next</button></div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>न्यूज़लेटर</span></div>
          <div class="section_heading">अगर आप हमारे अपडेट्स को <br />जानना चाहते हैं तो सब्सक्राइब करें।</div>
          <form class="newsletter_form">
              <input type="email" placeholder="आपका ई-मेल एड्रेस" />
              <input type="submit" value="सब्सक्राइब" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/letter to modi_files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801,<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://alettertonarendramodi.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://alettertonarendramodi.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function MessageContent() {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                <div className="site_contact_number">+91-8368320801<span>|</span> +91-8130767023</div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                    <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                    <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                    <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/president.html#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                        <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                        <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                        <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                        <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                        {/* <li><a href="emptyPage.html">रामायण हेरिटेज</a></li>
                                      <li><a href="emptyPage.html">साहित्य पर कार्य</a></li> */}
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://mahakumbhinfo.com/index.html"><img alt="Ramaynmanch" src="/assets/message _files/logo.png" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="https://mahakumbhinfo.com/president.html#">मीडिया</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                        <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://mahakumbhinfo.com/president.html">संदेश</a>
                      <ul>
                        <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                        {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                      </ul>
                    </li>
                  </ul></div>
                <div className="join_rcc hidden_mobile"><a href="https://mahakumbhinfo.com/president.html#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  {/* <img src="https://www.ramayanresearchcouncil.com/images/headerMobile_logo.png" alt="logo" /> */}
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/about-us.html">'महाकुंभ इन्फो' के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/about-us-copy.html">काउंसिल के बारे में</a></li>
                          <li><a href="https://mahakumbhinfo.com/our-aim.html">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/teamMember.html">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/teamMember.html">टीम के सदस्य</a></li>
                          <li><a href="https://mahakumbhinfo.com/sitaSakhiSamethi.html">सीता सखी समिति</a></li>
                          <li><a href="https://mahakumbhinfo.com/santSanrakshakMandal.html">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://mahakumbhinfo.com/reaserchersTeam.html">शोधार्थियों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/stateTeam.html">राज्यों की टीम</a></li>
                          <li><a href="https://mahakumbhinfo.com/advisorteam.html">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/emptyPage.html">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                          <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                          <li><a href="https://mahakumbhinfo.com/emptyPage.html">रामायण हेरिटेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/emptyPage.html">साहित्य पर कार्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/about-us.html">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/events.html">इवेंट्स</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">प्रेस रिलीज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/printgallery.html">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://mahakumbhinfo.com/press.html">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/photoGallery.html">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/videoGallery.html">वीडियो गैलरी</a></li>
                          <li><a href="https://mahakumbhinfo.com/photoGallery.html">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://mahakumbhinfo.com/president.html">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://mahakumbhinfo.com/president.html">अध्यक्ष</a></li>
                          {/* <li><a href="convenor.html">संयोजक</a></li>
                                      <li><a href="general-secretary.html">महासचिव</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a className="facebook" href="https://www.facebook.com/RamayanResearchCouncil/">facebook</a></li>
                        <li><a className="xtwitter" href="https://x.com/RamayanResearch">xtwitter</a></li>
                        <li><a className="instagram" href="https://www.instagram.com/ramayanresearchcouncil/">instagram</a></li>
                        <li><a className="youtube" href="https://www.youtube.com/@ramayanresearchcouncil">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="about_us_gallery">
        <div className="container">
          <div className="president_wrapper">
            <img src="/assets/message _files/presidentImg.jpg" />
            <div className="text_container">
              <div className="top_heading">
                <img alt="om" src="/assets/message _files/om_icon.png" /> अध्यक्ष, रामायण रिसर्च काउंसिल
              </div>
              <div className="name_text">श्री श्री 1008&nbsp;परमहंस स्वामी सांदीपेंद्र जी&nbsp;महाराज</div>
              <div className="about_president">(माता बगलामुखी मंदिर प्रांगण, नलखेड़ा, मध्य प्रदेश)1</div>
              <div className="about_president"> 
                ‘रामायण रिसर्च काउंसिल’ ट्रस्ट के रूप में पंजीकृत संस्था है, जो देश में सांस्कृतिक मूल्यों के संवर्धन हेतु कार्य करती रही है। काउंसिल ने अयोध्या में श्रीराम मंदिर संघर्ष पर भी 1250 पृष्ठों का एक ग्रंथ (श्रीरामलला- मन से मंदिर तक) लिखा है, जो हिन्दी भाषा में पूर्ण हो चुका है। अब कई भाषाओं में इसके लेखन पर कार्य जारी है। हिन्दी भाषा में ग्रंथ-लेखन के क्रम में काउंसिल के बोर्ड ऑफ ट्रस्टी के अध्यक्ष तथा तत्कालीन रक्षा राज्य मंत्री श्री अजय भट्ट जी तथा काउंसिल के महासचिव श्री कुमार सुशांत ने 31.08.2021 को मा. प्रधानमंत्री जी को ग्रंथ के विषय में विस्तृत जानकारी भी दी थी।
                <br /> काउंसिल साहित्य-सृजन हेतु प्रयासरत रहती है। यही कारण है कि काउंसिल संस्कृत भाषा के प्रचार-प्रसार हेतु पिछले दो वर्षों से संस्कृत भाषा में पाक्षिक पत्रिका ‘रामायण वार्ता’ के सफल प्रकाशन के पश्चात अब संस्कृत के शिक्षण-प्रशिक्षण हेतु 60 दिनों का एक कोर्स भी विकसित कर रही है। 
                <br />काउंसिल ने बीते महाकुंभ पर भी एक व्यापक सामग्रीपूर्ण कॉफीटेबल बुक को भी तैयार किया है। अवगत कराना है कि काउंसिल वर्ष 2020 से ही माता सीताजी के प्राकट्य-क्षेत्र सीतामढ़ी (बिहार) में भव्य मंदिर निर्माण सहित तीर्थ क्षेत्र के रूप में विकसित करने की दिशा में भी लगातार प्रयत्नशील रही है। हाल में बिहार राज्य धार्मिक न्यास पर्षद ने काउंसिल को सीतामढ़ी में 833 वर्ष प्राचीन मठ ‘श्रीरामजानकी स्थान’ (राघोपुर बखरी) पर 12 एकड़ भूमि भी आवंटित की है। इस हेतु 19 मई 2025 को न्यास के निर्देशन के बाद 23 मई को सीतामढ़ी में निबंधन की प्रक्रिया भी पूरी हुई।
                <span style={{display: 'none'}}>काउंसिल ने यहां के प्राचीन मठ का जीर्णोद्धार करने एवं 51 शक्तिपीठों से मिट्टी व ज्योत लाकर सीतामढ़ी को एक शक्ति-धाम के रूप में विकसित करने का निर्णय लिया है, जिसमें केंद्र तथा राज्य सरकार का सहयोग अपेक्षित है। इसके अतिरिक्त उक्त स्थल पर एक शक्तिशाली विशाल धनुष-स्वरूप (जो भगवान शंकर द्वारा भगवान परशुरामजी को प्रदान किया गया था, जो बाद में परशुरामजी के द्वारा राजा जनकजी को सौंपा गया था, उसी धनुष पर प्रत्यांचा चढ़ाने का संकल्प मां जानकीजी ने स्वयंवर हेतु लिया था) की प्रतिमा का निर्माण, श्रीहनुमानजी की 108 फीट ऊंची प्रतिमा और श्रीजटायु भगवान की 21 फीट ऊंची प्रतिमा के अलावा, इस मंदिर परिसर में अध्ययन केंद्र, शोध केंद्र, डिजिटल म्यूजियम समेत कई ऐसी सामाजिक और सांस्कृतिक गतिविधियां भी होनी हैं।
                  <br />10 जून 2025 को जाने-माने संतों ने कॉन्स्टिट्यूशन क्लब (नई दिल्ली) में एक प्रेस-वार्ता का आयोजन कर इस विषय की जानकारी भी दी। हमने 20 जुलाई 2025 को सनातन परिवारों को इस कार्य से जोड़ने हेतु एक आमंत्रण-अभियान की भी शुरूआत की है, जिसमें पहला आमंत्रण नलखेड़ा में मां बगलामुखी माता, काल-भैरव जी तथा दक्षिणमुखी हनुमानजी को दिया है।
                  आप सभी इस यज्ञ से बहुत अच्छे मनोभाव से जुड़ें, जिस रूप में भी अपना सहयोग प्रदान करना चाहते हैं, वह करें। यह मां जगदम्बा का महायज्ञ है। महालक्ष्मी जी का आह्वान है। उन्हें स्थापित करने कि लिए पूरा मनोयोग चाहिए। 
                  <br />भगवती सब पर कृपा बरसाती रहें।
                </span> <span className="read-more"> Read More...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="newsletter-section">
      <div class="container">
          <div class="section_sub_heading"><span>Newsletter</span></div>
          <div class="section_heading">To get weekly &amp; monthly <br />news,Subscribe to our newsletter</div>
          <form class="newsletter_form">
              <input type="email" placeholder="Your email address" />
              <input type="submit" value="Subscribe" />
          </form>
      </div>
        </div> */}
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img alt="logo" src="/assets/message _files/footer_logo.png" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>पता</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>फोन</span>
                  <p>+91-8368320801<br />+91-8130767023</p>
                </li>
                <li>
                  <span>ई-मेल</span>
                  <p><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>जानिए</span>
                  <ul>
                    <li><a href="https://mahakumbhinfo.com/about-us-copy.html">हमारे बारे में</a></li>
                    <li><a href="https://mahakumbhinfo.com/our-aim.html">हमारे उद्देश्य</a></li>
                    {/* <li><a href="about-us.html">Objectives</a></li> */}
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>सोशल मीडिया</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>‘रामायण रिसर्च काउंसिल’, नई दिल्ली में ट्रस्ट के रूप में एक पंजीकृत संस्था है जिसका गठन वर्ष 2020 में हुआ है। काउंसिल संतों के नेतृत्व एवं सानिध्य में ही कार्य करती रही है। काउंसिल का उद्देश्य हमारे देश के सांस्कृतिक मूल्यों का संवर्धन करना है।</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export function BlogsContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(apiUrl('/api/blogs'));
        const data = response.ok ? await response.json() : null;
        const items = Array.isArray(data?.items) ? data.items : [];
        if (active) {
          setPosts(items);
          setLoading(false);
        }
      } catch {
        if (active) {
          setPosts([]);
          setLoading(false);
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  const hasPosts = posts.length > 0;
  const feature = posts.find((post) => post.featured) || posts[0];
  const featureId = feature?._id || feature?.id || '';
  const rest = posts.filter((post) => post !== feature);

  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `\n    /* Blog page styling */\n    .blog-hero {background: linear-gradient(180deg, #49263d 17.31%, #8b4e5d 100%); color: #fff; padding: 40px 0 70px;}\n    .blog-hero .hero-inner {max-width: 1180px; margin: 0 auto; padding: 0 20px; display: flex; align-items: flex-start; justify-content: space-between; gap: 20px;}\n    .blog-hero h1 {font-size: 34px; margin: 0 0 8px; font-weight: 800;}\n    .blog-hero p {margin: 0; color: #ffe7da; font-size: 16px;}\n    .blog-follow {display: flex; align-items: center; gap: 10px; font-weight: 700;}\n    .blogs-wrapper {max-width: 1180px; margin: -40px auto 60px; padding: 0 20px;}\n    .blogs-panel {background: #fff; border-radius: 14px; box-shadow: 0 18px 32px rgba(18,43,76,0.08); padding: 16px; display: grid; grid-template-columns: 2fr 1fr; gap: 14px;}\n    .blog-feature {border-radius: 12px; overflow: hidden; background: #000; display: flex; flex-direction: column; text-decoration: none;}\n    .blog-feature img {width: 100%; height: 340px; object-fit: cover; display: block;}\n    .blog-feature .body {padding: 16px 18px 18px; background: #fff;}\n    .blog-feature h2 {margin: 0 0 8px; font-size: 24px; line-height: 1.3; color: #49263d;}
    .blog-feature:hover {box-shadow: 0 14px 28px rgba(18,43,76,0.12);}
    .blog-feature:hover h2 {text-decoration: underline;}\n    .blog-meta {color: #777; font-size: 14px; margin: 0 0 10px;}\n    .blog-sidebar {display: flex; flex-direction: column; gap: 12px;}\n    .mini-card {display: grid; grid-template-columns: 120px 1fr; gap: 12px; padding: 10px; border: 1px solid #e6e6e6; border-radius: 10px; background: #fff; text-decoration: none;}
    .mini-card:hover h4 {text-decoration: underline;}\n    .mini-card img {width: 100%; height: 90px; object-fit: cover; border-radius: 8px;}\n    .mini-card h4 {margin: 0 0 6px; font-size: 15px; line-height: 1.4; color: #49263d;}\n    .mini-card .blog-meta {margin: 0; font-size: 13px;}\n    .latest {margin-top: 24px;}\n    .latest h3 {margin: 0 0 12px; font-size: 18px; color: #49263d;}\n    .latest-grid {display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 12px;}\n    .latest-card {background: #fff; border-radius: 12px; border: 1px solid #e6e6e6; padding: 12px; display: flex; gap: 12px; text-decoration: none;}
    .latest-card:hover h4 {text-decoration: underline;}\n    .latest-card img {width: 96px; height: 96px; object-fit: cover; border-radius: 8px; flex-shrink: 0;}\n    .latest-card h4 {margin: 0 0 6px; font-size: 15px; color: #49263d;}\n    .latest-card .blog-meta {margin: 0; font-size: 13px;}\n    .section-title {margin: 28px 0 12px; font-weight: 700; font-size: 18px; color: #49263d;}\n    .blogs-empty {background: #fff; border-radius: 14px; border: 1px solid #e6e6e6; padding: 24px; text-align: center; color: #49263d;}\n    .blogs-empty p {margin: 6px 0 0; color: #777;}\n    .admin {margin-top: 32px; display: grid; gap: 12px;}\n    .admin-card {background: #fff; border: 1px solid #e6e6e6; border-radius: 12px; padding: 14px;}\n    .admin-card h4 {margin: 0 0 10px; color: #49263d;}\n    .admin input, .admin textarea {width: 100%; padding: 10px; border: 1px solid #e6e6e6; border-radius: 8px; font-family: inherit;}\n    .admin label {font-weight: 600; font-size: 13px; display: block; margin: 0 0 4px; color: #49263d;}\n    .admin .row {display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 10px;}\n    .admin button {background: #db4242; color: #fff; border: none; padding: 10px 14px; border-radius: 8px; font-weight: 700; cursor: pointer;}\n    .ghost-btn {background: #f2f2f2; color: #333; border: 1px solid #e6e6e6; padding: 8px 10px; border-radius: 8px; cursor: pointer;}\n    .badge {display: inline-flex; align-items: center; gap: 6px; background: #f5f5f5; padding: 6px 8px; border-radius: 8px; border: 1px solid #e6e6e6; font-size: 12px;}\n    .blog-list {display: grid; gap: 8px;}\n    .blog-item {border: 1px solid #e6e6e6; border-radius: 10px; padding: 10px; display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center;}\n    .blog-actions {display: flex; gap: 6px;}\n    .hidden {display: none;}\n    @media (max-width: 900px) {.blogs-panel {grid-template-columns: 1fr;} .blog-feature img {height: 240px;} .mini-card {grid-template-columns: 100px 1fr;}}\n    @media (max-width: 640px) {.blog-hero {padding: 32px 0 44px;} .blog-hero .hero-inner {flex-direction: column; align-items: flex-start;} .blog-feature img {height: 200px;} .latest-card {flex-direction: column;} .latest-card img {width: 100%; height: 160px;}}\n  ` }} />
      <header>
        <div className="container-fluid">
          <div className="row top_bar hidden_mobile">
            <div className="container">
              <div className="courtesy_bar">
                <div className="top_contact">
                  <div className="site_mail"><a href="mailto:info@ramayanparivar.com">info@ramayanparivar.com</a></div>
                  <div className="site_contact_number">+91-8368320801 <span>|</span> +91-8130767023</div>
                </div>
                <div className="header_social top_social">
                  <ul>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/" className="facebook" aria-label="Facebook" title="Facebook">facebook</a></li>
                    <li><a href="https://x.com/RamayanResearch" className="xtwitter" aria-label="X (Twitter)" title="X (Twitter)">xtwitter</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/" className="instagram" aria-label="Instagram" title="Instagram">instagram</a></li>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil" className="youtube" aria-label="YouTube" title="YouTube">youtube</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header_container">
            <div className="container">
              <div className="header_bar">
                <div className="header_social hidden_mobile">
                  <ul>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/" className="facebook">facebook</a></li>
                    <li><a href="https://x.com/RamayanResearch" className="xtwitter">xtwitter</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/" className="instagram">instagram</a></li>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil" className="youtube">youtube</a></li>
                  </ul>
                </div>
                <div className="nav_logo">
                  <ul className="hidden_mobile">
                    <li><a href="#">हमारे बारे में</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">श्रीरामलला ग्रंथ</a></li>
                        <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                        <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                        <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                        <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                        <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                        <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                      </ul></li>
                    <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a>
                      <ul>
                        <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                        <li><a href="https://rammandirbook.com/" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                        <li><a href="https://ramayanvarta.com/" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                        <li><a href="https://ramayanmanch.com/">रामायण-मंच</a></li>
                        <li><a href="https://alettertonarendramodi.com/">ए लेटर टू नरेंद्र मोदी</a></li>
                        <li><a href="https://mahakumbhinfo.com/">महाकुंभ</a></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="logo">
                    <a href="https://rammandirbook.com/index.html" target="_blank" rel="noopener noreferrer"><img src="/assets/book about us _files/logo.png" alt="Ramaynmanch" /></a>
                  </div>
                  <ul className="hidden_mobile">
                    <li><a href="#">मीडिया</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                        <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                        <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                      </ul>
                    </li>
                    <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a>
                      <ul>
                        <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="join_rcc hidden_mobile"><a href="#">Join RRC</a></div>
              </div>
              <div className="header_mobile_navbar hidden-desktop">
                <div className="top_barNav">
                  <div className="menu_open">open</div>
                  <div className="nav_slidebar">
                    <ul className="menu_bar">
                      <li>
                        <a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">हमारे बारे में</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">श्रीरामलला ग्रंथ</a></li>
                          <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">काउंसिल के बारे में</a></li>
                          <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">काउंसिल के उद्देश्य</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">हमारी टीम</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/teamMember.html" target="_blank" rel="noopener noreferrer">टीम के सदस्य</a></li>
                          <li><a href="https://rammandirbook.com/sitaSakhiSamethi.html" target="_blank" rel="noopener noreferrer">सीता सखी समिति</a></li>
                          <li><a href="https://rammandirbook.com/santSanrakshakMandal.html" target="_blank" rel="noopener noreferrer">संत-संरक्षक मण्डल</a></li>
                          <li><a href="https://rammandirbook.com/reaserchersTeam.html" target="_blank" rel="noopener noreferrer">शोधार्थियों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/stateTeam.html" target="_blank" rel="noopener noreferrer">राज्यों की टीम</a></li>
                          <li><a href="https://rammandirbook.com/advisorteam.html" target="_blank" rel="noopener noreferrer">हमारे सलाहकार</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">हमारे कार्य</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://maasita.com/" target="_blank" rel="noopener noreferrer">मां सीताजी के लिए</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">श्रीराम-मंदिर संघर्ष पर आधारित ग्रंथ</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">रामायण वार्ता</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">रामायण-मंच</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">ए लेटर टू नरेंद्र मोदी</a></li>
                          <li><a href="https://rammandirbook.com/emptyPage.html" target="_blank" rel="noopener noreferrer">महाकुंभ</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">मीडिया</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/events.html" target="_blank" rel="noopener noreferrer">इवेंट्स</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">प्रेस रिलीज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">वेब मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/printgallery.html" target="_blank" rel="noopener noreferrer">प्रिंट मीडिया कवरेज</a></li>
                          <li><a href="https://rammandirbook.com/press.html" target="_blank" rel="noopener noreferrer">टीवी मीडिया कवरेज</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">गैलरी</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/videoGallery.html" target="_blank" rel="noopener noreferrer">वीडियो गैलरी</a></li>
                          <li><a href="https://rammandirbook.com/photoGallery.html" target="_blank" rel="noopener noreferrer">मीडिया गैलरी</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">संदेश</a><span className="dropdown_arrow" />
                        <ul>
                          <li><a href="https://rammandirbook.com/president.html" target="_blank" rel="noopener noreferrer">अध्यक्ष</a></li>
                        </ul>
                      </li>
                    </ul>
                    <div className="courtesy_bar">
                      <div className="site_mail"><a href="mailto:info@ramayanmanch.com">info@ramayanmanch.com</a></div>
                      <div className="site_contact_number">+011 43502153 <span>|</span> +91-8527398595</div>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a href="https://www.facebook.com/RamayanResearchCouncil/" className="facebook">facebook</a></li>
                        <li><a href="https://x.com/RamayanResearch" className="xtwitter">xtwitter</a></li>
                        <li><a href="https://www.instagram.com/ramayanresearchcouncil/" className="instagram">instagram</a></li>
                        <li><a href="https://www.youtube.com/@ramayanresearchcouncil" className="youtube">youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="blog-hero">
        <div className="hero-inner">
          <div>
            <h1>Blogs</h1>
            <p>नवीनतम शोध, उत्पाद अपडेट, और उद्योग अंतर्दृष्टि।</p>
          </div>
          <div className="blog-follow">Follow: <span aria-hidden="true">🔔</span></div>
        </div>
      </section>
      <main className="blogs-wrapper">
        {!hasPosts ? (
          <div className="blogs-empty">
            <h3>{loading ? 'Loading blogs…' : 'No blogs published yet.'}</h3>
            {!loading && <p>Visit /admin to add your first blog post.</p>}
          </div>
        ) : (
          <>
            <div className="blogs-panel">
              <a className="blog-feature" href={featureId ? `/blogs/${featureId}` : '#'}>
                <img src={resolveMediaUrl(feature?.image) || '/assets/book.com_files/slider-1.png'} alt={feature?.title || 'Featured blog'} />
                <div className="body">
                  <div className="blog-meta">{feature ? `${feature.author} • ${feature.read}` : '—'}</div>
                  <h2>{feature?.title || '—'}</h2>
                  <p className="blog-meta">{feature?.excerpt || ''}</p>
                </div>
              </a>
              <div className="blog-sidebar">
                {rest.slice(0, 3).map((post) => {
                  const postId = post._id || post.id;
                  return (
                    <a className="mini-card" href={postId ? `/blogs/${postId}` : '#'} key={postId || post.title}>
                      <img src={resolveMediaUrl(post.image)} alt={post.title} />
                      <div>
                        <h4>{post.title}</h4>
                        <div className="blog-meta">{post.author}</div>
                        <div className="blog-meta">{post.read}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="latest">
              <div className="section-title">Recent highlights</div>
              <div className="latest-grid">
                {rest.slice(0, 6).map((post) => {
                  const postId = post._id || post.id;
                  return (
                    <a className="latest-card" href={postId ? `/blogs/${postId}` : '#'} key={postId || post.title}>
                      <img src={resolveMediaUrl(post.image)} alt={post.title} />
                      <div>
                        <h4>{post.title}</h4>
                        <div className="blog-meta">{post.author}</div>
                        <div className="blog-meta">{post.read}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>
      <footer className="footer_section">
        <div className="top_ftbar">
          <div className="container">
            <div className="ft_logo">
              <img src="/assets/book about us _files/footer_logo.png" alt="logo" />
            </div>
            <div className="ft_content">
              <ul className="address_section">
                <li>
                  <span>Address</span>
                  <p>F-52/53, Om Vihar Extension, Gali No. 10, Uttam Nagar West, Delhi-110059</p>
                </li>
                <li>
                  <span>Email</span>
                  <p>info@ramayanparivar.com</p>
                </li>
                <li>
                  <span>Phone</span>
                  <p>+91-8368320801 <span>|</span> +91-8130767023</p>
                </li>
              </ul>
              <ul className="quick_links">
                <li>
                  <span>Quick links</span>
                  <ul>
                    <li><a href="https://rammandirbook.com/about-us-copy.html" target="_blank" rel="noopener noreferrer">About Us</a></li>
                    <li><a href="https://rammandirbook.com/our-aim.html" target="_blank" rel="noopener noreferrer">Our Aim</a></li>
                    <li><a href="https://rammandirbook.com/about-us.html" target="_blank" rel="noopener noreferrer">Objectives</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="support_links">
                <li>
                  <span>Quick links</span>
                  <ul>
                    <li><a href="https://www.youtube.com/@ramayanresearchcouncil">Youtube</a></li>
                    <li><a href="https://www.facebook.com/RamayanResearchCouncil/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/ramayanresearchcouncil/">Instagram</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="ft_text">
                <li>
                  <p>Ramayana Research Council’ is a registered organization in the form of ‘trust’ with a
                    purpose to promote the cultural values of our country</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy_rightsection">
          <p>Copyright © 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export const pages = [
  { route: '/', title: 'रामायण रिसर्च काउंसिल', assetDir: 'रामायण रिसर्च काउंसिल_files', Component: HomeContent },
  { route: '/about-us', title: 'About Us', assetDir: 'about us_files', Component: AboutUsContent },
  { route: '/our-aim', title: 'Our Aim', assetDir: 'about us 2_files', Component: OurAimContent },
  { route: '/book-about-us', title: 'Book • About Us', assetDir: 'book about us _files', Component: BookAboutUsContent },
  { route: '/book', title: 'Book • Home', assetDir: 'book.com_files', Component: BookHomeContent },
  { route: '/book-for-ram', title: 'Book For Ram', assetDir: 'book for ram_files', Component: BookForRamContent },
  { route: '/ramayan-manch', title: 'Ramayan Manch', assetDir: 'ramayan manch _files', Component: RamayanManchContent },
  { route: '/our-work-for-sita', title: 'Our Work For Sita', assetDir: 'our work for sita_files', Component: OurWorkForSitaContent },
  { route: '/mahakumbh', title: 'Mahakumbh', assetDir: 'mahakumbh_files', Component: MahakumbhContent },
  { route: '/events', title: 'Events', assetDir: 'events_files', Component: EventsContent },
  { route: '/press', title: 'Press', assetDir: 'press_files', Component: PressContent },
  { route: '/print-media-coverage', title: 'Print Media Coverage', assetDir: 'print media coverage _files', Component: PrintMediaCoverageContent },
  { route: '/print-gallery', title: 'Print Gallery', assetDir: 'print gallery_files', Component: PrintGalleryContent },
  { route: '/gallery-video', title: 'Gallery • Video', assetDir: 'gallery video_files', Component: GalleryVideoContent },
  { route: '/our-team', title: 'Our Team', assetDir: 'our team main_files', Component: OurTeamContent },
  { route: '/other-team', title: 'Researchers Team', assetDir: 'other team_files', Component: OtherTeamContent },
  { route: '/sant-mandal', title: 'Sant Mandal', assetDir: 'sant mandal_files', Component: SantMandalContent },
  { route: '/sita-samiti', title: 'Sita Samiti', assetDir: 'sita samiti_files', Component: SitaSamitiContent },
  { route: '/state-team', title: 'State Team', assetDir: 'state team_files', Component: StateTeamContent },
  { route: '/advisors', title: 'Advisors', assetDir: 'advisors_files', Component: AdvisorsContent },
  { route: '/letter-to-modi', title: 'Letter To Modi', assetDir: 'letter to modi_files', Component: LetterToModiContent },
  { route: '/message', title: 'Message', assetDir: 'message _files', Component: MessageContent },
  { route: '/blogs', title: 'Blogs', assetDir: 'book about us _files', Component: BlogsContent },
];

export const getPageByRoute = (route) => pages.find((page) => page.route === route);
