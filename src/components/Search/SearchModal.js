import { useState } from "react";
import { Box, Modal } from "@mui/material";
import SearchList from "./SearchList";
import SearchModalBar from "./SearchModalBar";

function SearchModal({ open, handleClose, searchChangeCity }) {
  const [searchList, setSearchList] = useState([]);

  const onSearchListClick = (value) => {
    searchChangeCity(value);
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <SearchModalBar setSearchList={setSearchList} />
        {searchList.length > 0 && (
          <SearchList
            listItem={searchList}
            searchChangeCity={onSearchListClick}
          />
        )}
      </Box>
    </Modal>
  );
}

const style = {
  position: "fixed",
  top: "69px",
  left: "50%",
  transform: "translate(-50%, -10px)",
  width: { xs: "100%", sm: "100%", md: "80%" },
  bgcolor: "transparent",
  boxShadow: 24,
  p: 0,
};

export default SearchModal;
