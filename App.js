import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const [locked, setLocked] = useState(true);
  const [climate, setClimate] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.title}>Mi Toyota One App</Text>
        <Text style={styles.subtitle}>Buenas tardes, Juan</Text>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://www.buyatoyota.com/sharpr/vcr/adobe/assets/urn:aaid:aem:573852e4-a8e8-4c33-980f-0ccfe9d4c362/as/image.png?'
            }}
            style={styles.carImage}
          />

          <Text style={styles.carTitle}>RAV4 Híbrida 2024</Text>
          <Text style={styles.info}>Kilometraje: 12,458 km</Text>
          <Text style={styles.info}>Combustible: 75%</Text>
          <Text style={styles.info}>Autonomía: 680 km</Text>
          <Text style={styles.info}>
            Estado: <Text style={{ fontWeight: 'bold', color: locked ? '#d6001c' : '#2e7d32' }}>{locked ? 'Bloqueado' : 'Desbloqueado'}</Text>
          </Text>
        </View>

        <Text style={styles.section}>Controles rápidos</Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setLocked(!locked)}>
            <Icon
              name={locked ? 'lock' : 'lock-open'}
              size={30}
              color='#d6001c'
            />
            <Text style={styles.buttonText}>{locked ? 'Bloquear' : 'Desbloquear'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setClimate(!climate)}>
            <Icon
              name='fan'
              size={30}
              color={climate ? '#d6001c' : '#555'}
            />
            <Text style={styles.buttonText}>Clima</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Icon name='car-emergency' size={30} color='#d6001c' />
            <Text style={styles.buttonText}>Emergencia</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.section}>Servicios</Text>

        <View style={styles.servicesContainer}>
          <View style={styles.serviceCard}>
            <Icon name='calendar' size={28} color='#d6001c' />
            <Text style={styles.serviceText}>Agendar</Text>
          </View>

          <View style={styles.serviceCard}>
            <Icon name='tools' size={28} color='#d6001c' />
            <Text style={styles.serviceText}>Servicios</Text>
          </View>

          <View style={styles.serviceCard}>
            <Icon name='shield-check' size={28} color='#d6001c' />
            <Text style={styles.serviceText}>Garantía</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function VehicleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.title}>Mi Vehículo</Text>

        <View style={styles.card}>
          <Text style={styles.carTitle}>RAV4 Híbrida</Text>
          <Text style={styles.info}>VIN: JTMYRFRV6RD123456</Text>
          <Text style={styles.info}>Motor: 2.5L Híbrido</Text>
          <Text style={styles.info}>Transmisión: E-CVT</Text>
          <Text style={styles.info}>Color: Gris Metálico</Text>
          <Text style={styles.info}>Próximo servicio: 15.000 km</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MapScreen() {
  return (
    <SafeAreaView style={styles.containerMap}>
      <View style={styles.mapHeader}>
        <Text style={styles.title}>Ubicación</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.4489,
          longitude: -70.6693,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        <Marker
          coordinate={{
            latitude: -33.4489,
            longitude: -70.6693,
          }}
          title='Mi Toyota RAV4'
          description='Última ubicación registrada'
        />
      </MapView>
    </SafeAreaView>
  );
}

function StoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.title}>Tienda Toyota</Text>

        <View style={styles.listItem}>
          <Icon name='car-seat' size={24} color='#d6001c' style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>Accesorios originales Toyota</Text>
        </View>

        <View style={styles.listItem}>
          <Icon name='tire' size={24} color='#d6001c' style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>Llantas y Neumáticos</Text>
        </View>

        <View style={styles.listItem}>
          <Icon name='oil' size={24} color='#d6001c' style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>Lubricantes y Fluidos</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.title}>Más opciones</Text>

        <View style={styles.listItem}>
          <Icon name='account' size={24} color='#555' style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>Perfil</Text>
        </View>

        <View style={styles.listItem}>
          <Icon name='bell' size={24} color='#555' style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>Notificaciones</Text>
        </View>

        <View style={styles.listItem}>
          <Icon name='cog' size={24} color='#555' style={{ marginRight: 15 }} />
          <Text style={styles.itemText}>Configuración</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#d6001c',
          tabBarInactiveTintColor: '#757575',
          tabBarStyle: { height: 60, paddingBottom: 8 },
        }}>
        <Tab.Screen
          name='Inicio'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name='home' size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name='Vehículo'
          component={VehicleScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name='car' size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name='Mapa'
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name='map-marker' size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name='Tienda'
          component={StoreScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name='shopping' size={26} color={color} />,
          }}
        />
        <Tab.Screen
          name='Más'
          component={MoreScreen}
          options={{
            tabBarIcon: ({ color }) => <Icon name='menu' size={26} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerMap: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mapHeader: {
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: '#f5f5f5',
  },
  scrollPadding: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    elevation: 2,
  },
  carImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  carTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a1a1a',
  },
  info: {
    fontSize: 15,
    marginBottom: 8,
    color: '#444',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  actionButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '31%',
    elevation: 1,
  },
  buttonText: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: '500',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '31%',
    elevation: 1,
  },
  serviceText: {
    fontSize: 13,
    marginTop: 6,
    color: '#333',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  map: {
    flex: 1,
    marginTop: 15,
  },
});
