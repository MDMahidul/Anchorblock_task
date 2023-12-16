import { Button, Checkbox } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FiPlus, FiUploadCloud,FiArrowDown,FiMinus } from "react-icons/fi";
import { LuPen } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import './Users.css'
import { useQuery } from 'react-query';

const Users = () => {
  const [perPageUsers,setPerPageUSers] = useState([]);
  const [page,setPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  /* fetch data from API */
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users",page],
    queryFn: async () => {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      console.log(data);
      setPerPageUSers(data.data)
      return data;
    },
  });

  /* controll  */
  useEffect(() => {
     /* Update the selectAll state when selectedItems change */
    const isAllSelected = selectedItems.length === perPageUsers.length;
    setSelectAll(isAllSelected);
  }, [selectedItems, perPageUsers]);

  /* toggle the select all items  */
   const toggleSelectAll = () => {
     setSelectAll(!selectAll);
     if (!selectAll) {
       setSelectedItems(perPageUsers.map((user) => user.id));
     } else {
       setSelectedItems([]);
     }
   };

   /* control item checked and unchecked */
   const toggleSelectItem = (userId) => {
     if (selectedItems.includes(userId)) {
       setSelectedItems(selectedItems.filter((id) => id !== userId));
     } else {
       setSelectedItems([...selectedItems, userId]);
     }
   };

   /* check the indeterminate state */
  const isIndeterminate = selectedItems.length > 0 && selectedItems.length < perPageUsers.length;

  /* controll pagination */
  const handleNext=()=>{
    setPage(page+1);
  }
  const handlePrev=()=>{
    setPage(page-1);
  }

    return (
      <div className="mb-36">
        <div className="flex justify-between my-8">
          <p className="text-2xl font-medium text-gray-700">Users</p>
          <div className="flex justify-between gap-3">
            <Button color="light" className="font-semibold ">
              <FiUploadCloud className="me-2 text-xl" />
              Import
            </Button>
            <Button className="font-semibold bg-[#6941C6] hover:!bg-[#5c2fc7]">
              <FiPlus className="me-2 text-xl" /> Add User
            </Button>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-[#667085] bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-medium">
                <tr>
                  <th scope="col" className="px-6 py-3 flex items-center gap-5">
                    <input
                      checked={selectAll}
                      onChange={toggleSelectAll}
                      indeterminate={!!isIndeterminate}
                      id="purple-checkbox"
                      type="checkbox"
                      className="relative z-50 bg-transparent w-5 h-5 text-[#6941C6] bg-gray-100 border-[#6941C6] rounded focus:ring-white"
                    />
                    {isIndeterminate && (
                      <FiMinus className="text-[#6941C6] absolute top-[16px] left-[28px]" />
                    )}
                    User Info
                    <FiArrowDown className="text-base" />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    About
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {perPageUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3"
                    >
                      <label className="custom-checkbox me-5">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(user.id)}
                          onChange={() => toggleSelectItem(user.id)}
                        />
                        <span className="custom-checkmark"></span>
                      </label>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.avatar}
                        alt="user photo"
                      />
                      <div>
                        <p className="text-[#101828] text-sm font-medium">
                          {user.first_name} {user.last_name}
                        </p>
                        <p className="text-sm text-[#667085]">{user.email}</p>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-[#101828] text-sm font-medium">
                          Design software
                        </p>
                        <p className="text-sm text-[#667085]">
                          Super lightweight design app
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[#027A48] bg-green-100 px-2 py-0.5 rounded-2xl">
                        Customer
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-5 text-[#667085]">
                      <button className="font-medium hover:text-[#6941C6] text-2xl">
                        <RiDeleteBinLine />
                      </button>
                      <button className="font-medium hover:text-[#6941C6] text-xl">
                        <LuPen />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav className="px-6 py-4 flex justify-between items-center text-sm">
              <Button
                disabled={page < users.total_pages || page == 1}
                color="light"
                onClick={() => handlePrev()}
              >
                Previous
              </Button>
              <p className="text-[#344054]">
                Page {page} of {users.total_pages}
              </p>
              <Button
                disabled={page == users.total_pages}
                color="light"
                onClick={() => handleNext()}
              >
                Next
              </Button>
            </nav>
          </div>
        </div>
      </div>
    );
};

export default Users;