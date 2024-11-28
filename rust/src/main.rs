mod days; // Import the `days` module

fn main() {
    println!("Hello, world!");
    // Run the function from day1
    days::day1::run();

    // Call a specific function from day1
    days::day1::specific_task();

    // Run the function from day2
    days::day2::run();

    // Call a specific function from day2
    days::day2::specific_task();
}
