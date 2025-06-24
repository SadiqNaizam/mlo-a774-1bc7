import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Login attempt with:", values);
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would handle the response, e.g., show a toast message
      // form.reset();
    }, 2000);
  };

  const inputStyles = cn(
    "bg-transparent border-0 border-b rounded-none px-0 shadow-none",
    "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-primary"
  );

  return (
    <Card className="w-full max-w-sm bg-card border-none shadow-lg rounded-lg">
      <CardHeader className="text-center px-6 pt-8">
        <CardTitle className="text-3xl font-bold text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      className={inputStyles}
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className={inputStyles}
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-1">
                <Button variant="link" type="button" className="text-sm font-normal text-muted-foreground p-0 h-auto">
                    Forgot Password
                </Button>
            </div>

            <Button type="submit" className="w-full !mt-6 rounded-md text-base" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>

        <div className="mt-8 text-center text-sm">
          <span className="text-muted-foreground">
            Don't have an account?{' '}
          </span>
          <Button variant="link" type="button" className="p-0 h-auto font-medium text-primary">
            SignUp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
