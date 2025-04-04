const Rishab = ({
  menus,
  setActiveNav,
  activeNav,
  shapes1,
  setCopyRightClass,
}) => {
  return (
    <div className="iknow_tm_hero">
      <div className="background_shape" />
      <div className="hero_content">
        <div className="container">
          <div className="content_inner">
            <div className="main_info">
              <div className="left">
                <span className="subtitle">I'm</span>
                <h3 className="name">Dr. Rishab Bharadwaj </h3>
                <p className="sub-dep" >
                Consultant                                                              
                </p>
                <p className="text">
                Dept. of Paediatric Haematology, Oncology, Blood and Marrow Transplantation
MGM Cancer Institute and MGM Healthcare, Chennai

                </p>
           
              </div>
              <div className="right">
                <div className="image">
                  <img src="/img/thumbs/47-60.jpg" alt="img" />
                  <div className="main" data-img-url="/img/hero/avatar2.jpg" />
                </div>
              </div>
            </div>
            <div className="main_menu">
              <ul>
                {menus.map(
                  (menu) =>
                    menu.id !== 0 && (
                      <li
                        className={activeNav === menu.href ? "active" : ""}
                        key={menu.id}
                      >
                        <img
                          className="svg"
                          src={`/img/svg/${menu.icon}.svg`}
                          alt="Svg"
                        />
                        <span>{menu.title}</span>
                        <a
                          className="iknow_tm_full_link"
                          href={`#${menu.href}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveNav(menu.href);
                            setCopyRightClass("hidden visible");
                          }}
                        />
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Shapes */}
      <div className="simple_shapes">
        {shapes1.map((shap) => (
          <span
            key={shap.id}
            className={`${shap.classname} ${shap.animationName}`}
          >
            <img
              className="svg"
              src={`/img/svg/shapes/${shap.shapeImg}.svg`}
              alt="svg-icon"
            />
          </span>
        ))}
      </div>
      {/* /Hero Shapes */}
    </div>
  );
};
export default Rishab;
