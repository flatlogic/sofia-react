import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as dataFormat from "./UsersDataFormatters";
import actions from "../../../actions/usersListActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

import Widget from "../../Widget/Widget";

import s from "../Users.module.scss";



const UsersListTable = (props) => {
  
  const { rows, dispatch, loading, idToDelete, modalOpen } = props;
  const [search, setSearch] = useState('');
  const [tableWidth, setTableWidth] = useState(window.innerWidth);

  console.log("ROWS", rows)

  const handleDelete = () => {
    dispatch(actions.doDelete(idToDelete))
  }
  const openModal = (event, cell) => {
    const id = cell
    event.stopPropagation()
    dispatch(actions.doOpenConfirm(id))
  }
  const closeModal = () => {
    dispatch(actions.doCloseConfirm())
  }
  const actionFormatter = (cell) => {
    return (
      <div className={`d-flex justify-content-between`}>
        <Button
          className={s.controlBtn}
          color="info"
          size="xs"
          onClick={() => props.dispatch(push(`/admin/users/${cell}`))}
        >
          View
        </Button>
        <Button
          className={`${s.controlBtn} mx-2`}
          color="success"
          size="xs"
          onClick={() => props.dispatch(push(`/admin/users/${cell}/edit`))}
        >
          Edit
        </Button>
        <Button
          className={s.controlBtn}
          color="danger"
          size="xs"
          onClick={() => openModal(cell)}
        >
          Delete
        </Button>
      </div>
    )
  }

  const updateWindowDimensions = () => {
    setTableWidth(window.innerWidth);
  }

  useEffect(() => {
    dispatch(actions.doFetch({}))
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])


  const columns = [
    {
      dataField: "avatars",
      sort: true,
      formatter: (cell, row, rowIndex) => dataFormat.imageFormatter(cell, row, null, rowIndex),
      text: "Avatar",
    },
    {
      dataField: "firstName",
      sort: true,
      text: "First Name",
    },
    {
      dataField: "lastName",
      sort: true,
      text: "Last Name",
    },
    {
      dataField: "phoneNumber",
      sort: true,
      text: "Phone Number",
    },
    {
      dataField: "email",
      sort: true,
      text: "E-mail",
    },
    {
      dataField: "role",
      sort: true,
      text: "Role",
    },
    {
      dataField: "disabled",
      sort: true,
      formatter: dataFormat.booleanFormatter,
      text: "Disabled",
    },
    {
      dataField: "id",
      formatter: actionFormatter,
      text: "Actions",
    },
  ];

  return (
    <div>
      <Widget className="widget-p-md">
        <p className="headline-2">Users</p>
        <input
          className="form-control react-bootstrap-table-search-input my-3"
          aria-label="Search users"
          placeholder="Search"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <BootstrapTable
          keyField="id"
          columns={columns}
          data={rows.filter(row => Object.values(row).some(value =>
            typeof value !== 'object' && String(value).toLowerCase().includes(search.toLowerCase())
          ))}
          bordered={false}
          classes={`table-striped table-hover mt-4 ${tableWidth < 1150 ? 'table-responsive' : ''}`}
          pagination={paginationFactory()}
        />
      </Widget>
      <Modal size="sm" isOpen={props.modalOpen} toggle={() => closeModal()}>
        <ModalHeader toggle={() => closeModal()}>Confirm delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this item?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => closeModal()}>Cancel</Button>
          <Button color="primary" onClick={() => handleDelete()}>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

function mapStateToProps(store) {
  return {
    loading: store.users.list.loading,
    rows: store.users.list.rows,
    modalOpen: store.users.list.modalOpen,
    idToDelete: store.users.list.idToDelete,
  };
}

export default connect(mapStateToProps)(UsersListTable);
