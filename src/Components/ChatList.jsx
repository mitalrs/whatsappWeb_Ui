import React from "react";
// import ArchivedBar from "./ArchivedBar";
import ChatUser from "./ChatUser";
import { useInfiniteQuery } from "@tanstack/react-query";

function ChatList() {
  const { fetchNextPage, isLoading, isFetchingNextPage, error, data } =
    useInfiniteQuery({
      queryKey: ["usersData"],
      queryFn: ({ pageParam = "https://swapi.dev/api/people/?page=1" }) => {
        console.log({pageParam});
       return fetch(pageParam).then((res) => res.json());
      },
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage.next);
        return lastPage.next;
      },
    });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // console.log("data", data);

  // const users = [
  //   {l
  //     userName: "userOne",  
  //     lastMessege: "how's u?",
  //     type: "sent",
  //     time: "13:09",
  //     url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg",
  //   },
  //   {
  //     userName: "usertwo",
  //     lastMessege: "user two",
  //     type: "sent",
  //     time: "13:09",
  //     url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg",
  //   },
  //   {
  //     userName: "userthree",
  //     lastMessege: "user three",
  //     type: "recived",
  //     time: "13:09",
  //     url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg",
  //   },
  //   {
  //     userName: "userFour",
  //     lastMessege: "user five",
  //     type: "sent",
  //     time: "13:09",
  //     url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg",
  //   },
  //   {
  //     userName: "userFive",
  //     lastMessege: "note user",
  //     type: "recived",
  //     time: "13:09",
  //     url: "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg",
  //   },
  // ];

  return (
    <div className="flex-grow flex flex-col overflow-y-auto">
      {/* <ArchivedBar /> */}

      {/* {data?.results?.map((user, index) => {
        return (
          <ChatUser
            key={index}
            user={user.name}
            message={user.eye_color}
            type={"recieved"}
            time={"12:00"}
            img={"https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"}
          />
        );
      })} */}

      {data?.pages?.map((page) => {
        return page.results?.map((user, index) => {
          return (
            <ChatUser
              key={index}
              user={user.name}
              message={user.eye_color}
              type={"recieved"}
              time={"12:00"}
              img={
                "https://www.unigreet.com/wp-content/uploads/2023/03/Cute-Cat-Whatsapp-Dp-HD-781x1024.jpg"
              }
            />
          );
        });
      })}

      {isFetchingNextPage ? (
        "Loading"
      ) : (
        <button onClick={fetchNextPage}>load More</button>
      )}
    </div>
  );
}

export default ChatList;
