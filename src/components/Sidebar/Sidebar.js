import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import { logoutUser } from "../../actions/auth.js";
import SofiaLogo from "../Icons/SidebarIcons/SofiaLogo.js";
import "eva-icons/style/eva-icons.css";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    activeItem: "",
  }

  constructor(props) {
    super(props);
    this.doLogout = this.doLogout.bind(this);
  }

  componentDidMount() {
    this.element.addEventListener('transitionend', () => {
      if (this.props.sidebarOpened) {
        this.element.classList.add(s.sidebarOpen);
      }
    }, false);
  }

  componentDidUpdate(prevProps) {

    if (this.props.sidebarOpened !== prevProps.sidebarOpened) {
      if (this.props.sidebarOpened) {
        this.element.style.height = `${this.element.scrollHeight}px`;
      } else {
        this.element.classList.remove(s.sidebarOpen);
        setTimeout(() => {
          this.element.style.height = '';
        }, 0);
      }
    }
  }

  doLogout(id) {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <nav className={s.root}
           ref={(nav) => {
             this.element = nav;
           }}
      >
        <header className={s.logo}>
          <SofiaLogo/>
          <span className={s.title}>SOFIA</span>
        </header>
        <ul className={s.nav}>
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Dashboard"
            isHeader
            iconName={<i className="eva eva-home-outline"/>}
            link="/template/dashboard"
            index="dashboard"
            badge="9"
          />
          <h5 className={[s.navTitle, s.groupTitle].join(" ")}>TEMPLATE</h5>
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="User"
            isHeader
            iconName={<i className="eva eva-person-outline"/>}
            link="/admin"
            index="admin"
            exact={false}
            childrenLinks={[
              {
                header: 'My Profile', link: '/template/user/profile',
              },
              {
                header: 'User Management', link: '/admin/users',
              },
              {
                header: 'Edit Profile', link: '/template/edit',
              },
              {
                header: 'Change Password', link: '/template/password'
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Core"
            isHeader
            iconName={<i className="eva eva-cube-outline"/>}
            link="/template/core"
            index="core"
            childrenLinks={[
              {
                header: 'Typography', link: '/template/core/typography',
              },
              {
                header: 'Colors', link: '/template/core/colors',
              },
              {
                header: 'Grid', link: '/template/core/grid',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="UI Elements"
            isHeader
            iconName={<i className="eva eva-inbox-outline"/>}
            link="/template/ui-elements"
            index="ui-elements"
            childrenLinks={[
              {
                header: 'Alerts', link: '/template/ui-elements/alerts',
              },
              {
                header: 'Badges', link: '/template/ui-elements/badges',
              },
              {
                header: 'Buttons', link: '/template/ui-elements/buttons',
              },
              {
                header: 'Cards', link: '/template/ui-elements/cards',
              },
              {
                header: 'Carousel', link: '/template/ui-elements/carousel',
              },
              {
                header: 'Jumbotron', link: '/template/ui-elements/jumbotron',
              },
              {
                header: 'Icons', link: '/template/ui-elements/icons',
              },
              {
                header: 'Modal', link: '/template/ui-elements/modal',
              },
              {
                header: 'Navs', link: '/template/ui-elements/navs',
              },
              {
                header: 'Navbars', link: '/template/ui-elements/navbars',
              },
              {
                header: 'Notifications', link: '/template/ui-elements/notifications',
              },
              {
                header: 'Lists', link: '/template/ui-elements/lists',
              },
              {
                header: 'Progress', link: '/template/ui-elements/progress',
              },
              {
                header: 'Popovers', link: '/template/ui-elements/popovers',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Forms"
            isHeader
            iconName={<i className="eva eva-file-text-outline"/>}
            link="/template/forms"
            index="forms"
            childrenLinks={[
              {
                header: 'Elements', link: '/template/forms/elements',
              },
              {
                header: 'Validation', link: '/template/forms/validation',
              },
              {
                header: 'Wizard', link: '/template/forms/wizard',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Charts"
            isHeader
            iconName={<i className="eva eva-pie-chart-outline"/>}
            link="/template/charts"
            index="charts"
            childrenLinks={[
              {
                header: 'Bar charts', link: '/template/charts/bar',
              },
              {
                header: 'Pie charts', link: '/template/charts/pie',
              },
              {
                header: 'Line charts', link: '/template/charts/line',
              },
              {
                header: 'Other charts', link: '/template/charts/other',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Calendar"
            isHeader
            iconName={<i className="eva eva-calendar-outline"/>}
            link={"/template/calendar"}
            index="calendar"
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Tables"
            isHeader
            iconName={<i className="eva eva-grid-outline"/>}
            link="/template/tables"
            index="tables"
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Maps"
            isHeader
            iconName={<i className="eva eva-map-outline"/>}
            link="/template/maps"
            index="maps"
            childrenLinks={[
              {
                header: 'Google Maps', link: '/template/maps/google',
              },
              {
                header: 'Vector Map', link: '/template/maps/vector',
              },
            ]}
          />
          <LinksGroup
            onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
            activeItem={this.props.activeItem}
            header="Extra"
            isHeader
            iconName={<i className="eva eva-star-outline"/>}
            link="/template/extra"
            index="extra"
            childrenLinks={[
              {
                header: 'Charts', link: '/template/extra/charts',
              },
              {
                header: 'Login Page', link: '/template/extra/login',
              },
              {
                header: 'Register Page', link: '/template/extra/register',
              },
              {
                header: 'Error Page', link: '/template/extra/error',
              },
            ]}
          />
            <LinksGroup
                onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                activeItem={this.props.activeItem}
                header="Documentation"
                link="/documentation"
                isHeader
                iconName={<i className="eva eva-book-open-outline"/>}
                index="documentation"
                label="new"
                target="_blank"
                labelColor="success"
            />
        </ul>
        <div className="bg-widget d-flex mt-auto ml-1">
          <Button className="rounded-pill my-3 body-2 d-none d-md-block" type="submit" color="secondary-red">Unlock Full Version</Button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
