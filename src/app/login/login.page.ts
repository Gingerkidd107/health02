import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  get email() {
    return this.registrationForm.get("email");
  }
  get password() {
    return this.registrationForm.get("password");
  }

  public errorMessages = {
    email: [
      { type: "required", message: "Email is required" },
      { type: "pattern", message: "Please enter a valid email address" },
    ],
    password: [
      { type: "required", message: "Password is required" },
      {
        type: "maxlength",
        message: "Password cant be longer than 50 characters",
      },
    ],
  };

  registrationForm = this.formBuilder.group({
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"),
      ],
    ],
    password: ["", [Validators.required, Validators.maxLength(50)]],
  });

  public submit() {
    console.log(this.registrationForm.value);
  }

  goToHome() {
    this.router.navigate(["tabs/tab3"]);
  }

  goToRegister() {
    this.router.navigate(["register/"]);
  }

  ngOnInit() {}
}
