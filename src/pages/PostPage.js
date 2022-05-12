import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import ReactMarkdown from "react-markdown";
import { selectPostAndComments } from "../store/postPage/selectors";
import moment from "moment";

export default function PagePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);

  if (!postData)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  const { post, comments } = postData;

  return (
    <div>
      <h3>
        <Link to="/">Back</Link>
      </h3>
      {
        <>
          <h1>{post.title}</h1>
          <p className="meta">
            By <strong>{post.developer.name}</strong> &bull;{" "}
            {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
            {/* {post.post_likes.length} likes &bull;{" "} */}
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
          <ReactMarkdown children={post.content} />

          <h2>Comments</h2>
          {comments.rows.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className="meta">
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )}
        </>
      }
    </div>
  );
}
