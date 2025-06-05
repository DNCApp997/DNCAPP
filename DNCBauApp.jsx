
// (komplette BauApp mit allen Features)

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { FileText, Hammer, Users, Building2, Wrench, CalendarDays, User2 } from "lucide-react";
import jsPDF from "jspdf";

import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, doc, getAuth, signInWithEmailAndPassword, onAuthStateChanged
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcrVLgmRf5lC0hPPUvg-t0oaAVp4_YsyI",
  authDomain: "dnc-bauapp.firebaseapp.com",
  projectId: "dnc-bauapp",
  storageBucket: "dnc-bauapp.firebasestorage.app",
  messagingSenderId: "1039006536549",
  appId: "1:1039006536549:web:b9241fb719fb697834c78c",
  measurementId: "G-WMHFBXW3WM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function DNCBauApp() {
  return <div className="p-6 text-xl font-semibold">DNC BauApp läuft!</div>;
}
