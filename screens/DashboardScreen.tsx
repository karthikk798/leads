import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;

const DashboardScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => navigation.replace('Login'),
      },
    ]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#0c63e7',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 16 }}>
          <Ionicons name="power" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const cards = [
    {
      id: '1',
      title: "Today's Follow-Ups",
      icon: 'calendar-outline',
      value: '5',
      onPress: () => setShowModal(true),
    },
    {
      id: '2',
      title: 'Total Leads',
      icon: 'people-outline',
      value: '32',
    },
    {
      id: '3',
      title: 'Completed Follow-ups',
      icon: 'trophy-outline',
      value: '3',
    },
  ];

  const customerData = [
    { name: 'Arun Kumar', phone: '9876543210' },
    { name: 'Divya Sharma', phone: '9123456789' },
    { name: 'Ravi Verma', phone: '9988776655' },
    { name: 'Sneha Reddy', phone: '9012345678' },
    { name: 'Karan Patel', phone: '9876123450' },
  ];

  const renderCard = ({ item }: { item: typeof cards[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={item.onPress ? item.onPress : undefined}
    >
      <Ionicons name={item.icon} size={45} color="#0c63e7" />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardValue}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Karthikk</Text>

        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cardList}
        />
      </View>

      {/* Modal for Follow-Up Customers */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Today's Follow-Ups</Text>
            {customerData.map((customer, index) => (
              <View key={index} style={styles.customerItem}>
                <Ionicons name="person-circle-outline" size={24} color="#0c63e7" />
                    <View style={styles.customerDetails}>
                    <Text style={styles.customerName}>{customer.name}</Text>
                    <Text style={styles.customerPhone}>{customer.phone}</Text>
                </View>
</View>

            ))}

            <Pressable
              onPress={() => setShowModal(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardList: {
    paddingVertical: 10,
  },
  card: {
    width: 280,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f0f4ff',
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    marginTop: 8,
    color: '#333',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#0c63e7',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  customerItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginVertical: 6,
  width: '100%',
  paddingHorizontal: 10,
},

customerText: {
  fontSize: 16,
  marginLeft: 10,
  flexShrink: 1, 
},

customerDetails: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 1,
  marginLeft: 10,
},
customerName: {
  fontSize: 16,
  flex: 1,
},

customerPhone: {
  fontSize: 16,
  textAlign: 'right',
  width: 120, 
},
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#0c63e7',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
