<script>
  import { Router, Link, Route, navigate } from "svelte-routing";
  import Login from "./pages/Login.svelte";
  import Home from "./pages/Home.svelte";
  import { onMount } from "svelte";
  import Signup from "./pages/Signup.svelte";
  import ShowScholarships from "./pages/ShowScholarships.svelte";
  import Scholarship from "./pages/Scholarship.svelte";
  import Contact from "./pages/Contact.svelte";
  import About from "./pages/About.svelte";
  import Find from "./pages/Find.svelte";
  import Exam from "./pages/Exam.svelte";
  import ShowExams from "./pages/ShowExams.svelte";
  import SingleExam from "./pages/SingleExam.svelte";

  export let url = "/";

  onMount(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  });
</script>

<Router {url}>
  <div>
    <Route path="/login" component={Login} />
    <!-- <Route path="/home" component={Home} /> -->
    <Route path="/signup" component={Signup} />
    <Route path="/showscholarships" component={ShowScholarships} />
    <Route path="/home" component={Home} />
    <Route path="/scholarship/:id" let:params>
      <Scholarship id={params.id} />
    </Route>
    <Route path="/exam/:id" let:params>
      <SingleExam id={params.id} />
    </Route>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/find" component={Find} />
    <Route path="/exams" component={Exam} />
    <Route path="/showexams" component={ShowExams} />
  </div>
</Router>
