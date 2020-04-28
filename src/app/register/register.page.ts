import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get password() {
    return this.registrationForm.get("password");
  }

  get gender() {
    return this.registrationForm.get("personal.gender");
  }
  get age() {
    return this.registrationForm.get("personal.age");
  }
  get weight() {
    return this.registrationForm.get("personal.weight");
  }
  get height() {
    return this.registrationForm.get("personal.height");
  }

  public errorMessages = {
    name: [
      { type: "required", message: "Name is required" },
      { type: "maxlength", message: "Name cant be longer than 50 characters" },
    ],
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

    gender: [
      { type: "required", message: "Gender is required" },
      {
        type: "pattern",
        message: "Please enter a valid gender",
      },
    ],
    age: [
      { type: "required", message: "Age is required" },
      {
        type: "pattern",
        message: "Please enter a valid age",
      },
    ],
    weight: [
      { type: "required", message: "Weight is required" },
      {
        type: "pattern",
        message: "Please enter a valid weight",
      },
    ],
    height: [
      { type: "required", message: "Height is required" },
      {
        type: "pattern",
        message: "Please enter a valid height",
      },
    ],
  };

  registrationForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.maxLength(50)]],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"),
      ],
    ],
    password: ["", [Validators.required, Validators.maxLength(50)]],
    personal: this.formBuilder.group({
      gender: [
        "",
        [Validators.required, Validators.pattern("^Male$|^Female$|^Other$")],
      ],
      age: [
        "",
        [
          Validators.required,
          Validators.pattern("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$"),
        ],
      ],
      weight: ["", [Validators.required, Validators.pattern("^[0-9]{2,3}$")]],
      height: ["", [Validators.required, Validators.pattern("^[0-9]{2}$")]],
    }),
  });

  public submit() {
    console.log(this.registrationForm.value);
  }

  goToHome() {
    this.router.navigate(["tabs/tab3"]);
  }

  goToLogin() {
    this.router.navigate(["login/"]);
  }

  ngOnInit() {}
}
