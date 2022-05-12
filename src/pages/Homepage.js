import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { selectFeedPosts } from "../store/feed/selectors";
import { fetchPosts } from "../store/feed/actions";

//const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function Homepage() {
  // const [data, setData] = useState({
  //   loading: true,
  //   posts: [],
  // });

  //   async function fetchPosts() {
  //     setData({ ...data, loading: true }); //before fetching data, loading is set to true

  //     const response = await axios.get(`${API_URL}/posts`);

  //     const posts = response.data.rows;
  const dispatch = useDispatch();

  //     setData({
  //       loading: false, //once the data is fetched, loading is set to false
  //       posts: posts,
  //     });
  //   }
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <div style={{ marginLeft: 20 }}>
      <h2>Posts</h2>
      {/* {data.posts.map((post) => { */}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {/* <h3>{post.title}</h3> */}
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span className="tags">
                {post.tags.map((tag) => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}
      <div>
        ...
        <button onClick={() => dispatch(fetchPosts)}>Load more</button>
      </div>
    </div>
  );
}
