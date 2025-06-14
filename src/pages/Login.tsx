import React, { FormEvent, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                {/* Logo and Title */}
                <div className="text-center space-y-4">
                    <img 
                        src="/logo2.png" 
                        alt="Portal Logo" 
                        className="w-24 h-24 mx-auto"
                    />
                    <h1 className="text-2xl font-bold text-foreground">Student Enrollment Portal</h1>
                    <p className="text-muted-foreground">Access your academic dashboard</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl text-card-foreground">Sign In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input 
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input 
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2">
                                    <input 
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="rounded border-input"
                                    />
                                    <span className="text-muted-foreground">Remember me</span>
                                </label>
                                <a href="#" className="text-primary hover:text-primary/90">
                                    Forgot password?
                                </a>
                            </div>

                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Need help? Contact IT Support
                    </p>
                    <p className="text-xs text-muted-foreground">
                        © 2024 Student Enrollment Portal. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;