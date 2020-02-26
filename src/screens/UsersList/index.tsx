import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PrimaryInput from "../../components/PrimaryInput";
import ItemsList from "../../components/ItemsList";
import { User } from "../../models/user";
import { UsersListWrapper } from "./styles";
import PageHeader from "../../components/PageHeader";
import NothingFound from "../../components/NothingFound";
import { RootState } from "../../models/rootState";
import { fetchUsers } from "../../redux/actions";

interface Props {
  fetchUsers: () => void;
  users: User[];
}

const UsersList = (props: Props) => {
  const [queryString, onQueryChange] = useState("");

  const {fetchUsers} = props;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const updateSearch = (e: React.FormEvent<HTMLInputElement>) => {
    onQueryChange(e.currentTarget.value);
  };

  const filteredUsers = props.users.filter(user => {
    return user.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
  });

  return (
    <UsersListWrapper>
      <PageHeader title="Users list" />
      <PrimaryInput
        value={queryString}
        onChange={updateSearch}
        placeholder="Search by user name..."
      />
      {filteredUsers.length > 0 && <ItemsList items={filteredUsers} />}
      {filteredUsers.length === 0 && (
        <NothingFound title="No users found, try again!" />
      )}
    </UsersListWrapper>
  );
};

const mapStateToProps = (state: RootState) => {
  const users = state.users.users;
  return { users };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
