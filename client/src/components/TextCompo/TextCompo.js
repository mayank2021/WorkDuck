import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import "./TextCompo.css";

const TextCompo = () => {
  const { selectableTextRef } = useContext(UserContext);
  return (
    <div className="text-compo--container">
      <h1 className="primary-heading">Select text</h1>
      <p ref={selectableTextRef} className="selectable-text-area">
        What is web development?Web development is the coding career that
        specifically deals with the building and maintenance of websites. It’s
        the work that happens behind the scenes to make a website look
        beautiful, work fast and perform well with a seamless user experience.
        Web developers, do this by using a variety of coding languages. The
        languages they use depend on the types of tasks they are performing and
        the platforms on which they are working. Web development skills are in
        high demand worldwide and well paid too – making development a great
        career option. It is one of the easiest accessible higher-paid fields as
        you do not need a traditional university degree to become qualified.
        Type of web developer:- The field of web development is generally broken
        down into the front-end (the user-facing side) and back-end (the
        server-side). Let’s dive into the details. A front-end web developer is
        responsible for implementing visual elements that users see and interact
        within a web application and A back-end web developer is responsible for
        server-side web application logic and integration of the work front-end
        developers do. Back-end developers are usually writing the web services
        and APIs used by front-end developers and mobile application developers.
        A person who learns all the skills required for frontend and backend
        development is called a full stack web developer. Ex:- whenever you
        created a google form you don’t need to worry about the coding stuff
        like you don’t need to worry about how the input fields are created, how
        the form looks, how the submit button works, how the form collects the
        data and give it to you, you don’t need to worry about all these things
        because someone is already done this for you, make the things as simple
        as that anyone can use, this is what a web developer does.Front end
        Skill Set:- As a frontend developer, you have to pay attention to the
        user interface and user experience. Basic skills you should know to get
        started as a Front-end Web Developer are given below. HTML:- HTML stands
        for hypertext markup language and it's used to create electronic
        documents (called pages) that are displayed on the World Wide Web,
        confused? In simple words, HTML is used to make the structure of the
        website. It use to build the pages and kept them together. Like in a
        house, bricks work as a structure and concrete kept them together. CSS:-
        CSS stands for cascading styling sheet. As the name suggests, CSS is the
        language for describing the styling of Web pages, including colors,
        layout, and typography. It allows us to adapt the presentation to
        different types of devices, such as large screens, small screens, or
        printers. After completing the structure of your house you need to color
        it, decorate it so that it can look beautiful in this way CSS does the
        same for the websites. JavaScript:- JavaScript is a programming language
        that allows users to interact with web pages. There are almost no limits
        to the things you can do with JavaScript on a web page like Show or hide
        more information with the click of a button, Slide through a carousel of
        images on the homepage, Zooming in or zooming out on an image,
        displaying a timer or count-down, playing audio and video, displaying
        animations, using a drop-down and a lot more. In simple words, js added
        the functionality to the websites like we completed the structure,
        colors, and decoration of our house but it feels incomplete until we
        don’t have lights, fans, or other appliances and for that, we need to
        take an electric connection to run them in the same way js works as
        electricity and added functionality in our websites. Framework:-
        Front-end frameworks give you a pre-written base code for various UI
        components. With the help of this foundation and its reusable
        components, you can develop the rest of the front end much faster. Most
        trending front-end frameworks nowadays are React, Angular, and Vue
        (popularity decreasing). You don’t need to learn all of them for an
        excellent developer, you just need to learn one of them thoroughly to
        make things effective. Back-end Skill Set:- Back-end developers are
        focused on the inner workings of web applications to build out the
        "server-side" of web applications. Server-side is the code and language
        that runs behind the scenes on the web server or the back-end. Basic
        skills you should know to get started as Back-end Web Developer are
        given below. Programming language:- Backend development languages handle
        the 'behind-the-scenes' functionality of web applications. It's code
        that connects the web to a database, manages user connections, and
        powers the web application itself and there is a lot of option available
        you go with like JavaScript, python, java, ruby, PHP. Frameworks:- To
        make your development simple and fast I recommend you to learn a
        framework in your particular language like if learned JavaScript then go
        for Nodejs if you learned Python go for Django if you learned Java go
        for Spring, if you learned Ruby go for Rails if you learn PHP go for
        Laravel. Databases:- The database is used for retrieval and updating of
        data, a database also helps in authentication which is observed in
        websites having a login and signup functionality and a lot more like
        Accesses system. Mainly databases are divided into two parts SQL and
        NoSQL. SQL:- SQL databases are relational and uses structured query
        language and have a predefined and table-based schema. SQL databases are
        better for multi-row transactions. Here are some trending SQL databases,
        PostgreSQL, MySQL, MariaDB, MS SQL, Oracle. NoSQL:- NoSQL databases are
        non-relational and have dynamic schemas for unstructured data. NoSQL
        databases are document, key-value, graph, or wide-column stores. NoSQL
        is better for unstructured data like documents or JSON. Here are some
        trending NoSQL databases, MongoDB (Document), Couch DB(Document),
        Cassandra(Column DBs), Influx (Time series), TimescaleDB (Time Series),
        Firebase (Realtime), RethinkDB (Realtime). API’S:- API stands for
        Applications Programming Interface is a set of commands, functions,
        protocols, and objects that programmers can use to create software or
        interact with an external system. Lets simply it, there are lots of
        companies who provide data to other companies or developers like weather
        data to display the weather on their own sites or Facebook shares their
        user data to tell other companies what the specific user like his/her
        interest, friends circle and a lot more so that other company will
        display according to your interest and all these things possible with
        the help of API.
      </p>
    </div>
  );
};

export default TextCompo;
