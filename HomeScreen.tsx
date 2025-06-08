import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Toaster, toast } from 'sonner-native';

export default function VirtualPersonalAssistant() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [newAppointment, setNewAppointment] = useState('');
  const [appointments, setAppointments] = useState<string[]>([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      toast.success('Task added');
      setNewTask('');
    } else {
      toast.error('Please enter a valid task');
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    toast('Task removed');
  };

  const addAppointment = () => {
    if (newAppointment.trim()) {
      setAppointments([...appointments, newAppointment.trim()]);
      toast.success('Appointment scheduled');
      setNewAppointment('');
    } else {
      toast.error('Please enter appointment details');
    }
  };

  const deleteAppointment = (index: number) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    toast('Appointment canceled');
  };

  const automateWorkflows = () => {
    toast('Workflow automation triggered! Check your schedule for reminders.');
  };

  const suggestReminders = () => {
    toast('Reminder: Stay hydrated and take regular breaks!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="assistant" size={28} color="#007BFF" />
          <Text style={styles.headerText}>Virtual Personal Assistant</Text>
        </View>

        {/* To-Do List Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>To-Do List</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Enter a new task"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {tasks.map((task, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{task}</Text>
              <TouchableOpacity onPress={() => deleteTask(index)}>
                <MaterialIcons name="delete" size={24} color="#d11a2a" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Appointments Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appointments</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newAppointment}
              onChangeText={setNewAppointment}
              placeholder="Enter appointment details"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.addButton} onPress={addAppointment}>
              <MaterialIcons name="event" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {appointments.map((appointment, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{appointment}</Text>
              <TouchableOpacity onPress={() => deleteAppointment(index)}>
                <MaterialIcons name="delete" size={24} color="#d11a2a" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Workflow Automation Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workflow Automation</Text>
          <TouchableOpacity style={styles.actionButton} onPress={automateWorkflows}>
            <MaterialIcons name="autorenew" size={24} color="white" />
            <Text style={styles.actionButtonText}>Automate Workflows</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={suggestReminders}>
            <MaterialIcons name="notifications-active" size={24} color="white" />
            <Text style={styles.actionButtonText}>Suggest Reminders</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toaster />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E293B',
    marginLeft: 12,
    letterSpacing: -0.5,
  },
  section: {
    marginBottom: 28,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1E293B',
    letterSpacing: -0.5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    color: '#1E293B',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#3B82F6',
    padding: 14,
    borderRadius: 12,
    marginLeft: 12,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  cardText: {
    fontSize: 16,
    color: '#1E293B',
    flex: 1,
    marginRight: 12,
    fontWeight: '500',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});