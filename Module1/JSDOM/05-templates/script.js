const BLOGPOSTS = [
  {
    author: "Author 1",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia fugit voluptates earum quidem non ipsa dolorem sapiente consequuntur. Eligendi enim repellat culpa excepturi, debitis dicta quia iusto nulla atque corporis inventore tempora. Eum, quas ex placeat deleniti architecto modi quae nostrum ipsum facilis dolor consequuntur, aspernatur accusantium eius temporibus.",
    month: "August",
  },
  {
    author: "Author 2",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia fugit voluptates earum quidem non ipsa dolorem sapiente consequuntur. Eligendi enim repellat culpa excepturi, debitis dicta quia iusto nulla atque corporis inventore tempora. Eum, quas ex placeat deleniti architecto modi quae nostrum ipsum facilis dolor consequuntur, aspernatur accusantium eius temporibus.",
    month: "July",
  },
  {
    author: "Author 3",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia fugit voluptates earum quidem non ipsa dolorem sapiente consequuntur. Eligendi enim repellat culpa excepturi, debitis dicta quia iusto nulla atque corporis inventore tempora. Eum, quas ex placeat deleniti architecto modi quae nostrum ipsum facilis dolor consequuntur, aspernatur accusantium eius temporibus.",
    month: "October",
  },
  {
    author: "Author 1",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia fugit voluptates earum quidem non ipsa dolorem sapiente consequuntur. Eligendi enim repellat culpa excepturi, debitis dicta quia iusto nulla atque corporis inventore tempora. Eum, quas ex placeat deleniti architecto modi quae nostrum ipsum facilis dolor consequuntur, aspernatur accusantium eius temporibus.",
    month: "January",
  },
];

const getBlogTemplate = (author, post, month) => {
  return `<div class="blog-post">
    <blockquote>${post}</blockquote>
    <p>${author} - ${month}</p>
    </div>`;
};

const blogPostContainer = document.getElementById("blogposts");

const populateBlogPosts = () => {
  for (let i = 0; i < BLOGPOSTS.length; i++) {
    const currentPost = BLOGPOSTS[i];
    blogPostContainer.innerHTML += getBlogTemplate(
      currentPost.author,
      currentPost.post,
      currentPost.month
    );
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const newBlogPost = {
    post: formElements.post.value,
    author: formElements.author.value,
    month: formElements.month.value,
  };
  console.log(newBlogPost);
  blogPostContainer.innerHTML += getBlogTemplate(
    newBlogPost.author,
    newBlogPost.post,
    newBlogPost.month
  );
  event.target.reset();
};

const form = document.getElementById("blog-form");
form.addEventListener("submit", handleFormSubmit);

populateBlogPosts();
