import React, {Component} from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Container} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ColorPiker from 'rc-color-picker';
import Select from 'react-select';
import MaskedInput from 'react-maskedinput'
import Scrollspy from './ScrollSpyComponent';
import { Link } from 'react-router-dom';
import s from '../../pages/forms/elements/Elements.module.scss';
import "eva-icons/style/eva-icons.css";
import * as Icons from "@material-ui/icons";

export default class Libs extends Component {
    state = {
        mde: '',
    };

    onMdeChange(value) {
        this.setState({
            mde: value,
        })
    };

    valueFormatter = (v) => {
        return `${v}`;
    }

    render() {
        return (
            <Row className={s.root}>
                <Col md={10}>
                    <Breadcrumb>
                        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                        <BreadcrumbItem>Documentation</BreadcrumbItem>
                        <BreadcrumbItem active>Libs</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col lg={9}>

                    <Container id="Animate.css" className="my-4">
                        <h3>Animate.css</h3>
                        <p>animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great
                            for emphasis, home pages, sliders, and general just-add-water-awesomeness.</p>
                        <h4>Example</h4>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<h1 class="animated infinite fadeIn slow">Fade in</h1>'}</SyntaxHighlighter>
                        <p>For more examples please refer to <a href="https://github.com/daneden/animate.css/"
                                                                target="_blank" rel="noopener noreferrer">Animate.css</a></p>
                    </Container>

                    <Container id="Eva-icons" className="my-4">
                        <h3>Eva Icons</h3>
                        <p>Eva Icons is a pack of more than 480 beautifully crafted Open Source icons for common actions and items.</p>
                        <h4>Examples</h4>
                        <i className="eva eva-options mr-2"/>
                        <i className="eva eva-pantone mr-2"/>
                        <i className="eva eva-people mr-2"/>
                        <i className="eva eva-percent mr-2"/>
                        <i className="eva eva-person mr-2"/>
                        <i className="eva eva-phone"/>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<i className="eva eva-options"/>\n' +
                        '<i className="eva eva-pantone"/>\n' +
                        '<i className="eva eva-people"/>\n' +
                        '<i className="eva eva-percent"/>\n' +
                        '<i className="eva eva-phone"/>'}</SyntaxHighlighter>
                        <p className="lead">Want to see examples? <Link to="/template/ui-elements/icons">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://akveo.github.io/eva-icons/#/"
                                                                                  target="_blank" rel="noopener noreferrer">Eva Icons</a></p>
                    </Container>

                    <Container id="Font-Awesome" className="my-4">
                        <h3>Font-awesome</h3>
                        <p>The iconic SVG, font, and CSS toolkit</p>
                        <h4>Examples</h4>
                        <i className="fa fa-arrow-left fa-2x mr-3"/>
                        <i className="fa fa-github fa-2x mr-3"/>
                        <i className="fa fa-bath fa-2x mr-3"/>
                        <i className="fa fa-grav fa-2x mr-3"/>
                        <i className="fa fa-telegram fa-2x"/>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<i className="fa fa-arrow-left fa-2x mr-2" />\n' +
                        '<i className="fa fa-github fa-2x mr-2" />\n' +
                        '<i className="fa fa-bath fa-2x mr-2" />\n' +
                        '<i className="fa fa-grav fa-2x mr-2" />\n' +
                        '<i className="fa fa-telegram fa-2x" />'}</SyntaxHighlighter>
                        <p className="lead">Want to see examples? <Link to="/template/ui-elements/icons">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://github.com/FortAwesome/Font-Awesome"
                                                                                  target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
                    </Container>

                    <Container id="Formik" className="my-4">
                        <h3>Formik</h3>
                        <p>Build forms in React, without the tears</p>
                        <p>Formik is a small group of React components and hooks for building forms in React and React Native</p>
                        <p className="lead">Want to see examples? <Link to="/template/forms/validation">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://formik.org/"
                                                                                  target="_blank" rel="noopener noreferrer">Formik</a></p>
                    </Container>

                    <Container id="Material-UI" className="my-4">
                        <h3>Material-UI</h3>
                        <p>React components for faster and easier web development.</p>
                        <p>Build your own design system, or start with Material Design.</p>
                        <Row className={s.iconList}>
                            <Col xs={4} sm={1} className="p-1 my-2 ml-2"><Icons.AccessAlarm /></Col>
                            <Col xs={4} sm={1} className="p-1 my-2"><Icons.AccessTime /></Col>
                            <Col xs={4} sm={1} className="p-1 my-2"><Icons.GitHub /></Col>
                            <Col xs={4} sm={1} className="p-1 my-2"><Icons.Games /></Col>
                            <Col xs={4} sm={1} className="p-1 my-2"><Icons.Nfc /></Col>
                            <Col xs={4} sm={1} className="p-1 my-2"><Icons.Facebook /></Col>
                        </Row>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<Row className={s.iconList}>\n' +
                        '<Col xs={4} sm={1} className="p-1 my-2 ml-2"><Icons.AccessAlarm /></Col>\n' +
                        '<Col xs={4} sm={1} className="p-1 my-2"><Icons.AccessTime /></Col>\n' +
                        '<Col xs={4} sm={1} className="p-1 my-2"><Icons.GitHub /></Col>\n' +
                        '</Row>'}</SyntaxHighlighter>
                        <p className="lead">Want to see examples? <Link to="/template/ui-elements/icons">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://material-ui.com/"
                                                                                  target="_blank" rel="noopener noreferrer">Material-ui</a></p>
                    </Container>

                    <Container id="Formsy-React" className="my-4">
                        <h3>Formsy-react</h3>
                        <p>A form input builder and validator for React JS</p>
                        <p className="lead">Want to see examples? <Link to="/template/forms/wizard">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://github.com/formsy/formsy-react"
                                                                                  target="_blank" rel="noopener noreferrer">Formcy React</a></p>
                    </Container>

                    <Container id="Fullcalendar" className="my-4">
                        <h3>Fullcalendar</h3>
                        <p>A JavaScript event calendar. Customizable and open source.</p>
                        <p className="lead">Want to see examples? <Link to="/template/calendar">Click</Link></p>
                        <p>For more examples and documentation please refer to <a
                            href="https://fullcalendar.io/docs/react" target="_blank" rel="noopener noreferrer">Fullcalendar</a></p>
                    </Container>

                    <Container id="Flatpickr" className="my-4">
                        <h3>Flatpickr</h3>
                        <p>Flatpickr is a lightweight and powerful datetime picker.</p>
                        <p className="lead">Want to see examples? <Link to="/template/calendar">Click</Link></p>
                        <p>For more examples and documentation please refer to <a
                            href="https://flatpickr.js.org/" target="_blank" rel="noopener noreferrer">Flatpickr</a></p>
                    </Container>

                    <Container id="Keen-Slider" className="my-4">
                        <h3>Keen-Slider</h3>
                        <p>keen-slider is a free library agnostic touch slider with native touch/swipe behavior and great performance.</p>
                        <p>For more examples and documentation please refer to <a
                            href="https://github.com/rcbyr/keen-slider" target="_blank" rel="noopener noreferrer">Keen-Slider</a></p>
                    </Container>

                    <Container id="MUI-Datatables" className="my-4">
                        <h3>MUI-Datatables</h3>
                        <p>MUI-Datatables is a responsive datatables component built on Material-UI.</p>
                        <p>It comes with features like filtering, resizable columns, view/hide columns, draggable columns, search,
                           export to CSV download, printing, selectable rows, expandable rows, pagination, and sorting.
                           On top of the ability to customize styling on most views, there are three responsive modes
                           "vertical", "standard", and "simple" for mobile/tablet devices.</p>
                        <p>For more examples and documentation please refer to <a
                            href="https://github.com/gregnb/mui-datatables" target="_blank" rel="noopener noreferrer">MUI-Datatables</a></p>
                    </Container>

                    <Container id="Line-Awesome" className="my-4">
                        <h3>Line-awesome</h3>
                        <p>A single file that replaces Font Awesome with modern line icons.</p>
                        <h4>Examples</h4>
                        <i className="la la-arrow-left la-2x mr"/>
                        <i className="la la-github la-2x mr"/>
                        <i className="la la-facebook la-2x mr"/>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<i className="la la-arrow-left la-2x mr" />\n' +
                        '<i className="la la-github la-2x mr" />\n' +
                        '<i className="la la-facebook la-2x mr" />'}</SyntaxHighlighter>
                        <p className="lead">Want to see examples? <Link to="/template/ui-elements/icons">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://github.com/FortAwesome/Font-Awesome"
                                                                                  target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
                    </Container>

                    <Container id="React-Toastify" className="my-4">
                        <h3>React Toastify</h3>
                        <p>Growl-style alerts and messages</p>
                        <p className="lead">Want to see examples? <Link to="/template/ui-elements/notifications">Click</Link></p>
                        <p>For more examples and documentation please refer to <a href="https://github.com/fkhadra/react-toastify"
                                                                                  target="_blank" rel="noopener noreferrer">react-toastify</a></p>
                    </Container>

                    <Container id="Rc-color-picker" className="my-4">
                        <h3>Rc-color-picker</h3>
                        <p>Color piker component for React</p>
                        <ColorPiker/>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<ColorPiker />'}</SyntaxHighlighter>
                        <p>For more examples and documentation please refer to <a
                            href="https://github.com/react-component/color-picker" target="_blank" rel="noopener noreferrer">Color Picker</a></p>
                    </Container>
                    <Container id="Rc-Hammerjs" className="my-4">
                        <h3>Rc-hammerjs</h3>
                        <p>ReactJS / HammerJS integration. Support touch events in your React app.</p>
                        <p>For more examples and documentation please refer to <a href="https://github.com/JedWatson/react-hammerjs"
                                                                                  target="_blank" rel="noopener noreferrer">HammerJS</a></p>
                    </Container>
                    <Container id="React-dropzone" className="my-4">
                        <h3>React-dropzone</h3>
                        <p>Simple HTML5-compliant drag'n'drop zone for files built with React.js.</p>
                        <p className="lead">Want to see examples? <Link to="/template/forms/elements">Click</Link></p>
                        <p>For more examples and documentation please refer to <a
                            href="https://github.com/react-dropzone/react-dropzone" target="_blank" rel="noopener noreferrer">React Dropzone</a></p>
                    </Container>
                    <Container id="React-Google-Maps" className="my-4">
                        <h3>React-google-maps</h3>
                        <p>React.js Google Maps integration component</p>
                        <p className="lead">Want to see examples? <Link to="/template/maps/google">Click</Link></p>
                        <p>For more examples and documentation please refer to <a
                            href="https://github.com/tomchentw/react-google-maps" target="_blank" rel="noopener noreferrer">Google Maps</a></p>
                    </Container>
                    <Container id="React-Maskedinput" className="my-4">
                        <h3>React-maskedinput</h3>
                        <p>A React component for <code>&lt;input&gt;</code> masking, built on top of inputmask-core.</p>
                        <div style={{width: '200px'}}>
                            <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" className="form-control"/>
                        </div>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<MaskedInput mask="1111 1111 1111 1111" name="card" size="20" className="form-control"/>'}</SyntaxHighlighter>
                        <p>For more examples and documentation please refer to <a href="https://github.com/insin/react-maskedinput"
                                                                                  target="_blank" rel="noopener noreferrer">Masked Input</a></p>
                    </Container>
                    <Container id="React-MDE" className="my-4">
                        <h3>React-mde</h3>
                        <p>A simple yet powerful and extensible Markdown Editor editor for React. React-mde is built on top of
                            Draft.js.</p>

                        <p>For more examples and documentation please refer to <a href="https://github.com/andrerpena/react-mde"
                                                                                  target="_blank" rel="noopener noreferrer">ReactMDE</a></p>
                    </Container>
                    <Container id="React-Select" className="my-4">
                        <h3>React-select</h3>
                        <p>A flexible and beautiful Select Input</p>
                        <p className="lead">Want to see examples? <Link to="/template/forms/elements">Click</Link></p>
                        <Select options={
                            [{ value: 'chocolate', label: 'Chocolate' },
                                { value: 'strawberry', label: 'Strawberry' },
                                { value: 'vanilla', label: 'Vanilla' }]}
                        />
                        <p>For more examples and documentation please refer to <a href="https://react-select.com/home" target="_blank" rel="noopener noreferrer">React Select</a></p>
                    </Container>
                    <Container id="Reactstrap" className="my-4">
                        <h3>Reactstrap</h3>
                        <p>React wrapper for Bootstrap 4</p>
                        <Button color="success">Bootstrap Button</Button>
                        <SyntaxHighlighter language='javascript'
                                           style={tomorrow}>{'<Button color="success">Bootstrap Button</Button>'}</SyntaxHighlighter>
                        <p>For more examples and documentation please refer to <a
                            href="https://github.com/clauderic/react-sortable-hoc" target="_blank" rel="noopener noreferrer">Reactstrap</a></p>
                    </Container>


                    <Container id="Other">
                        <h3 className="">Other Libs</h3>
                        <ul className="check-list">
                            <li className="lead py-2">
                                <a className="fw-semi-bold" href="https://www.amcharts.com/docs/v4/getting-started/integrations/using-react/" rel="noopener noreferrer" target="_blank"> @amcharts</a>.
                                JavaScript Charts & Maps Programming library for all your data visualization needs.
                            </li>
                            <li className="lead py-2">
                                <a className="fw-semi-bold" href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank"> React Bootstrap</a>.
                                With React Bootstrap you can build responsive, mobile-first projects on the web using React.js and the world's
                                most popular front-end CSS library — Bootstrap v4.
                            </li>
                            <li className="lead py-2">
                                <a className="fw-semi-bold" href="https://react-bootstrap-table.github.io/react-bootstrap-table2/" rel="noopener noreferrer" target="_blank"> react-bootstrap-table2</a>.
                                React-Bootstrap-table2 is next generation of react-bootstrap-table. Rebuilted to make better and easier to use react-bootstrap=table.
                            </li>
                            <li className="lead py-2">
                                <a className="fw-semi-bold" href="https://github.com/highcharts/highcharts-react" rel="noopener noreferrer" target="_blank"> highcharts-react</a>.
                                Make your data come alive. Highcharts makes it easy for developers to set up interactive charts in their web pages.
                            </li>
                            <li className="lead py-2">
                                <a className="fw-semi-bold" href="https://github.com/apexcharts/react-apexcharts" rel="noopener noreferrer" target="_blank"> react-apexcharts</a>.
                                Modern & Interactive Open-source Charts.
                            </li>
                        </ul>
                    </Container>
                </Col>
                <Col lg={3}>
                    <Scrollspy
                        title="LIBS"
                        prefix="libs"
                        ids={[
                            'Animate.css',
                            'Eva-icons',
                            'Font-Awesome',
                            'Formik',
                            'Material-UI',
                            'Formsy-React',
                            'Fullcalendar',
                            'Flatpickr',
                            'Keen-Slider',
                            'MUI-Datatables',
                            'Line-Awesome',
                            'React-Toastify',
                            'Rc-color-picker',
                            'Rc-Hammerjs',
                            'React-Autosize-Textarea',
                            'React-Datetime',
                            'React-dropzone',
                            'React-Google-Maps',
                            'React-Maskedinput',
                            'React-MDE',
                            'React-Select',
                            'Reactstrap',
                            'Other'
                        ]} />
                </Col>
            </Row>
        )
    }
}
