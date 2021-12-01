<template>
  <header>
    <h1>Shopping List</h1>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
    <nav>
      <div class="nav-link">Home</div>
      <div class="nav-link">About</div>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Login/Sign Up
        </a>
        <div class="nav-item dropdown-menu">
          <form class="px-4 py-3">
            <div class="form-group">
              <label for="exampleDropdownFormEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
            </div>
            <div class="form-group">
              <label for="exampleDropdownFormPassword1">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="dropdownCheck">
              <label class="form-check-label" for="dropdownCheck">
                Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-primary">Log in</button>
          </form>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">New around here? Sign up</a>
          <a class="dropdown-item" href="#">Forgot password?</a>
        </div>
      </li>
    </nav>
  </header>
</template>

<script>
import Toggle from '@/components/Toggle'
export default {
  props: ['mode'],
  components: {
    Toggle
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #C3C3C3;
  transition: background 0.3s ease-in-out;
}
.dark header {
  background: #15202B;
}
header h1 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 900;
}
header nav {
  display: flex;
  height: 60px;
}
header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
header nav .nav-link:hover {
  background: #B0B0B0;
}
.dark header nav .nav-link:hover {
  background: #101520;
}
</style>
